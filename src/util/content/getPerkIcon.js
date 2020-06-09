import * as Icon from "../../components/ui/Icons";

const getPerkIcon = icon => {
  switch (icon) {
    case "lunch":
      return Icon.Utensils;
    case "calendar":
      return Icon.Calendar;
    case "travel":
      return Icon.Plane;
    case "pension":
      return Icon.PiggyBank;
    case "fruits":
      return Icon.Fruits;
    case "perks":
      return Icon.Clock;
    case "breakfast":
      return Icon.Coffee;
    case "cycle":
      return Icon.Biking;
    case "bed":
      return Icon.Bed;
    case "celebrate":
      return Icon.Celebrate;
    case "beer":
      return Icon.Beer;
    case "car":
      return Icon.Car;
    default:
      return null;
  }
};

export default getPerkIcon;
