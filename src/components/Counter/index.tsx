import { TDispatch } from '../../interfaces';

const Counter = ({
  label,
  id,
  handler,
  count,
}: {
  label: string;
  id: string;
  handler: TDispatch;
  count: number;
}) => {
  const handleCount = (step: number) => {
    if (!count && step === -1) return;
    handler((preVal: number) => (preVal >= 0 ? preVal + step : 0));
  };

  return (
    <div className="flex p-3 m-1 border border-black">
      <div>&nbsp;{label}&nbsp;</div>
      <div id={id} onClick={() => handleCount(1)}>
        +
      </div>
      <div>&nbsp;{count}&nbsp;</div>
      <div id={id} onClick={() => handleCount(-1)}>
        -
      </div>
    </div>
  );
};

export default Counter;
