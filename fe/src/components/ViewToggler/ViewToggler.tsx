import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stack, Button } from '@chakra-ui/react';
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
        <FontAwesomeIcon icon={['fas', 'list-ul']} />
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
        <FontAwesomeIcon icon={['fas', 'th']} />
      </Button>
    </Stack>
  );
};

export default ViewToggler;
