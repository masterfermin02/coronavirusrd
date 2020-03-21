import CoronaService from './CoronaService'

export default {
    async getStat() {
        const { data } = await CoronaService.getLatestStatByCountry("?country=dominican%20republic");
      return data;
    }
}
