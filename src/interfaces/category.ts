import { IconName } from ".";

export interface Category {
  id: string;
  name: string;
  icon: IconName;
}

export interface CategoryWithStats extends Category {
  active: number;
  archived: number;
}
