import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export const ApiFetch = () => {
  const baseUrl = 'https://kraken-japan-hackathon-api.onrender.com';

  const [productRatesHashes, setProductRatesHashes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductRatesFromApi = async () => {
      try {
        const productCode = 'AGILE-23-06-01';
        const rateType = 'consumption_charges';
        const apiUrl = `${baseUrl}/products/${productCode}/product_rates/${rateType}`;

        //--

        const patterns = [
          {
            startTime: "2023-06-04T06:00:00+09:00",
            endTime: "2023-06-04T11:30:00+09:00"
          },
          {
            startTime: "2023-06-04T12:00:00+09:00",
            endTime: "2023-06-04T18:30:00+09:00"
          },
          {
            startTime: "2023-06-04T19:00:00+09:00",
            endTime: "2023-06-04T23:30:00+09:00"
          }
        ];

        const results = [];

          const response = await fetch(apiUrl);
          const data = await response.json();

          for (let i = 0; i < patterns.length; i++) {
          const { startTime, endTime } = patterns[i];
          const filteredData = data.filter(
            item => item.valid_from >= startTime && item.valid_from <= endTime
          );

          filteredData.sort((a, b) => a.amount - b.amount);

          const smallestAmount = filteredData.length > 0 ? filteredData[0].amount : null;
          // console.log(filteredData.amount = smallestAmount)
          if (filteredData.amount == smallestAmount)
            console.log(filteredData)

          // results.push(filteredData.amount = smallestAmount);

          results.push({
            amount: smallestAmount,
            validFrom: smallestAmount ? filteredData[0].valid_from : null
          });

          }
          // --
          console.log(results);
          setLoading(false);
          setProductRatesHashes(results);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchProductRatesFromApi();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {productRatesHashes.map((rate, index) => (
            <View key={index} style={styles.item}>
              <Text>Amount: {rate.amount}</Text>
              <Text>Valid From: {rate.validFrom ? rate.validFrom.split("T")[1].substr(0, 5) : "N/A"}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 10,
  },
};



// export default ApiFetch;
