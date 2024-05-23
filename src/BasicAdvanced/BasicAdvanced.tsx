import { Plan } from "./Plan";

export const BasicAdvanced = () => {
  return (
    <div>
      <h3>BasicAdvanced</h3>
      <Plan type="basic" name="Susan" />
      <Plan type="advanced" name="Anna" email="anna@gmail.com" />
    </div>
  );
};
