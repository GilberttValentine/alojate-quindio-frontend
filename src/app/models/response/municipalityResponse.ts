export interface MunicipalityResponse {
  id: number;
  name: string;
  url_picture: string;
  lodgings: {
    total: number;
  };
}