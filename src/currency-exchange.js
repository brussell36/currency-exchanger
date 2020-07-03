export class ExchangeService {
  async getRateByCurrency() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
  getAmount(amount) {
    const money = amount * (`${response.conversion_rates[`${currency}`]}`);
    return $('.showAmount').text(`The value in ${currency} of input number is ${money}`);
  }
}