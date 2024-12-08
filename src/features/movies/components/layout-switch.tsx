import { IconButton } from '../../../shared/components/icon-button';
import { ListIcon } from '../../../assets/icons/list-icon';
import { GridIcon } from '../../../assets/icons/grid-icon';

import styled from '@emotion/styled';

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-bottom: 1rem;
  width: 100%;
`;

interface LayoutSwitchProps {
  layout: 'grid' | 'list';
  onLayoutChange: (layout: 'grid' | 'list') => void;
}

export const LayoutSwitch = ({ layout, onLayoutChange }: LayoutSwitchProps) => {
  return (
    <SwitchContainer>
      {layout === 'list' ? (
        <IconButton onClick={() => onLayoutChange('grid')}>
          <GridIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => onLayoutChange('list')}>
          <ListIcon />
        </IconButton>
      )}
    </SwitchContainer>
  );
};
