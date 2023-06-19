import { TDispatch } from '../../interfaces';
import { BiChevronUpCircle, BiChevronDownCircle } from 'react-icons/bi';
import { STEP_BACK, STEP_NEXT } from '../../constants';

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
    if (!count && step === STEP_BACK) return;
    handler((preVal: number) => (preVal >= 0 ? preVal + step : 0));
  };

  return (
    <div className="flex px-2 text-xl">
      <div>{label}</div>
      <div className="flex pl-2 items-center">
        <BiChevronUpCircle id={id} onClick={() => handleCount(STEP_NEXT)} />
        <div className="w-8 flex justify-center">{count}</div>
        <BiChevronDownCircle id={id} onClick={() => handleCount(STEP_BACK)} />
      </div>
    </div>
  );
};

export default Counter;
