const HomeScreen = () => {
  const baseUrl = 'https://kraken-japan-hackathon-api.onrender.com';

  // consumption fetch
  // return how much kWh used by the consumer in a given period of time
  const getConsumptionFromApi = () => {
    // spin is required and identifies the user
    const spin = '0300111001601606060001';
    // period is optional but if not specified return all the pages
    const periodFrom = '2023-06-02T06:00:00+09:00';
    const periodTo = '2023-06-02T07:00:00+09:00';

    const apiUrl = `${baseUrl}/supply_points/${spin}/consumption?period_from=${encodeURIComponent(periodFrom)}&period_to=${encodeURIComponent(periodTo)}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  getConsumptionFromApi().then(data => console.log(data));

  // store the Api fetch result in consumptionHashes
  getConsumptionFromApi().then(data => {
    const consumptionHashes = data;
    // console.log(consumptionHashes);
  });

  return (
    <View className="flex-row justify-center">
      <Text>HomeScreen</Text>
      <Text></Text>


    </View>
  )
}

export default HomeScreen;
