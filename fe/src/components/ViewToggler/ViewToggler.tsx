import * as React from 'react';
import { Stack, Button, Icon } from '@chakra-ui/react';
import { BsListUl, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { HomeContext } from '../../pages/Home';
import { ViewType } from '../../utils';

interface Props {
  viewSwitchable: boolean;
}

const ViewToggler: React.FC<Props> = ({
  viewSwitchable,
}: Props): JSX.Element => {
  const { view, setView } = React.useContext(HomeContext);
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

  React.useEffect(() => {
    if (!viewSwitchable && view !== ViewType.Grid) {
      setView(ViewType.Grid);
    }
  }, [view, setView, viewSwitchable]);

  return (
    <Stack spacing={0} direction="row" alignContent="end">
      <Button
        size="md"
        rounded="none"
        variant="solid"
        isActive={isView(ViewType.List)}
        isDisabled={!viewSwitchable}
        onClick={isView(ViewType.Grid) ? setViewType : undefined}
        aria-label="List View"
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
        aria-label="Grid View"
      >
        <Icon as={BsFillGrid3X3GapFill} />
      </Button>
    </Stack>
  );
};

export default ViewToggler;
