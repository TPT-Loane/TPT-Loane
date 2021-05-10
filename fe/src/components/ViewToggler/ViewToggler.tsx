import * as React from 'react';
import {
  Stack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { BsListUl, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ViewType } from '../../utils';

interface Props {
  view: ViewType;
  setView: React.Dispatch<React.SetStateAction<ViewType>>;
  viewSwitchable: boolean;
}

const ProductCard: React.FC<Props> = ({ view, setView, viewSwitchable } : Props): JSX.Element => {
  const isView = (viewType: ViewType): boolean => view === viewType;

  const setViewType = (): void => {
    if (!viewSwitchable) {
      return;
    }

    const newViewType: ViewType = isView(ViewType.List)
      ? ViewType.Grid
      : ViewType.List;

    setView(newViewType);
  };

  return (
    <Stack spacing={0} direction="row" alignContent="end">
      <Button
        size="md"
        rounded="none"
        variant="solid"
        isActive={isView(ViewType.List)}
        isDisabled={!viewSwitchable}
        onClick={isView(ViewType.Grid) ? setViewType : undefined}
      >
        <Icon as={BsListUl} />
      </Button>
      <Button
        size="md"
        rounded="none"
        variant="solid"
        isActive={isView(ViewType.Grid)}
        isDisabled={!viewSwitchable}
        onClick={isView(ViewType.List) ? setViewType : undefined}
      >
        <Icon as={BsFillGrid3X3GapFill} />
      </Button>
    </Stack>
  );
};

export default ProductCard;
