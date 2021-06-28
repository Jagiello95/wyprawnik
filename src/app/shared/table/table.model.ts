export enum TableSortDirection {
  up = "up",
  down = "down",
  none = "none"
}

export interface row {
  ID: string;
  Name: string;
  Age: string;
  Gender: string;
  Country: string;
  [key: string]: string;
}

export interface Column {
  title: string;
  control: boolean;
}

export interface TableColumn {
  col: string | null
  dir: TableSortDirection
}
