export interface ConversionUnit {
  id: string;
  name: string;
  symbol: string;
}

export interface ConversionCategory {
  id: string;
  name: string;
  icon: string;
  units: ConversionUnit[];
}
