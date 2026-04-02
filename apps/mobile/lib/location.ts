import * as Location from 'expo-location';

export interface LocationData {
  latitude: number;
  longitude: number;
  state: string;
  city: string;
}

export async function getCurrentLocation(): Promise<LocationData | null> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return null;

  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
  });

  const [geocode] = await Location.reverseGeocodeAsync(location.coords);

  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    state: geocode?.region || '',
    city: geocode?.city || geocode?.subregion || '',
  };
}

export function stateNameToSlug(stateName: string): string {
  return stateName.toLowerCase().replace(/\s+/g, '-');
}
