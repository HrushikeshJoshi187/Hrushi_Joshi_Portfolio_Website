interface NavigationProps {
  navigationOpened: boolean;
}

export default function Navigation({ navigationOpened }: NavigationProps) {
  return <>{navigationOpened ? "Navigation" : ""}</>;
}
