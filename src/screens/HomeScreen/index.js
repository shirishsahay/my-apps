import { useEffect, useState } from "react";

// import Geocode from "react-geocode";

//need to enable to get location from latitude and longitude

const HomeScreen = () => {
  const [location, setLocation] = useState({});
  // const [address, setAddress] = useState("");
  // const [address1, , setAddress1] = useState("");
  // const [fullAddress, setFullAddress] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let locationObject = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      setLocation(locationObject);
    });
  }, []);

  /*
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyBjh_5PZ9JqKhy_2ldCeMcUuonHCIAnvE0");

  // set response language. Defaults to english.
  // Geocode.setLanguage("en");

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  // Geocode.setRegion("es");

  // set location_type filter . Its optional.
  // google geocoder returns more that one address for given lat/lng.
  // In some case we need one address as response for which google itself provides a location_type filter.
  // So we can easily parse the result for fetching address components
  // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
  // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
  // Geocode.setLocationType("ROOFTOP");

  // Enable or disable logs. Its optional.
  // Geocode.enableDebug();

  // Get address from latitude & longitude.
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
      setAddress(address);
    },
    (error) => {
      console.error(error);
    }
  );

  // Get formatted address, city, state, country from latitude & longitude when
  // Geocode.setLocationType("ROOFTOP") enabled
  // the below parser will work for most of the countries
  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
            default:
              break;
          }
        }
      }
      setAddress1(city + ", " + state + "," + country);
      setFullAddress(address);
      console.log(city, state, country);
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );

  const [latlong, setLatlong] = useState({});
  // Get latitude & longitude from address.
  Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      const obj = {
        latitude: lat,
        longitude: lng,
      };
      setLatlong(obj);
    },
    (error) => {
      console.error(error);
    }
  );
  */

  return (
    <>
      <p>This is home screen of the application</p>
      {location.latitude}
      <br />
      {location.longitude}
      {/* <p>{address}</p>
      <p>{address1}</p>
      <p>{fullAddress}</p> */}
      {/* <p>
        {latlong.latitude}
        <br />
        {latlong.longitude}
      </p> */}
      <br />
    </>
  );
};

export default HomeScreen;
