export interface linkInterface {
  title?: string;
  name: string;
  link: string;
}

type formProps = {
  slug: string;
  setLinkData: React.Dispatch<SetStateAction<linkInterface[]>>;
};

export interface linkTree {
  [key: string]: Array<linkInterface>;
}
