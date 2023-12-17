import "@emotion/react";
import { Step } from "react-joyride";
/* page */
// login
export interface Ilogin {
  email: string;
  password: string;
  loginError?: string;
}

/* components */
// Seo
export interface TitleType {
  companyName: string;
}

// Search
export interface SearchType {
  placeholder: string;
  variantWidth?: string;
  setTextSearchInput?: React.Dispatch<React.SetStateAction<string>>;
  setFilterSearchInput?: React.Dispatch<React.SetStateAction<string>>;
  filterSelectYN?: boolean;
  filterOptionFirst?: SelectSearchProps[];
  filterOptionSecond?: SelectSearchProps[];
  excelDownloadYN?: boolean;
  excelData?: any;
}

interface SelectSearchProps {
  [key: string]: string;
}

// Pagination
export interface PaginationType {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

// Modal
export interface ModalDefaultType {
  onClickToggleModal?: () => void;
  title?: string | any;
  closeBtn?: any;
  path?: string;
  width?: string;
  height?: string;
}

/* styles */
// Shared
export interface ButtonType {
  children?: React.ReactNode;
  size?: string;
  variantColor?: string;
  variantHoverColor?: string;
  variantBackgoundColor?: string;
  variantBackgroundHoverColors?: string;
  variantBorder?: string;
}

export interface VariantType {
  [key: string]: string;
}

export interface VariantObjType {
  [key: string]: {
    fontSize?: string;
    padding?: string;
    width?: number | string;
    height?: number | string;
  };
}

/* page */
export interface JoyRideState {
  run: boolean;
  steps: Step[];
}

export interface JoyRideObj {
  [key: number]: boolean;
}

export interface DataObject {
  BreakTime: number;
  CO2emissions: number;
  EndLatitude: number;
  EndLocationName: string;
  EndLongitude: number;
  EndRidingDateTime: string;
  GpxFileName: string;
  ID: number;
  IsApplyHeatmap: boolean;
  RidingDateTime: string;
  RidingTime: number;
  SkinPackageName: string;
  StartLatitude: number;
  StartLocationName: string;
  StartLongitude: number;
  StartRidingDateTime: string;
  TotalDistance: number;
  AvgSpeed: number;
  MaxSpeed: number;
  UserID: string;
}

export interface TotalDataProps {
  data: DataObject[];
}

export interface DistrictDataProps {
  jangandata: DataObject[];
  gwonseondata: DataObject[];
  paldaldata: DataObject[];
  yeongtongdata: DataObject[];
}

export type DistrictInfoResult = [string, number, DataObject[]];
