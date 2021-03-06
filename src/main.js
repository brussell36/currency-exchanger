import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from './../src/currency-exchange.js';

$(document).ready(function() {
  $('#exchangeCurrency').click(function() {
    const currency = $('#country').val();
    const amount = $('#amount').val();
    $('#country').val("");
    $('#amount').val("");
    
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getRateByCurrency(currency);
      getRate(response);
      getAmount(amount, response);
      handleInput(currency, response);
    })();

    function getRate(response) {
      if (response) {
        $('.showCurrency').text(`The current exchange rate of ${currency} is ${response.conversion_rates[`${currency}`]}`);
      } else {
        $('.showCurrency').text(`There was an error handling your request.`);
      }
    }

    function getAmount(amount, response) {
      const money = amount * (`${response.conversion_rates[`${currency}`]}`);
      return $('.showAmount').text(`The value of ${amount} USD is ${money} ${currency}`);
    }

    function handleInput(currency, response) {
      if (!response.conversion_rates[`${currency}`]) {
        $('.showCurrency').text(`This currency does not exist.`);
        $('.showAmount').hide();
      }
    }
  });
});
