export interface Event {
  id: string;
  name: string;
  address: string;
  date: string;
  public: boolean;
  position: {
    lat: number;
    lng: number;
  };
}
