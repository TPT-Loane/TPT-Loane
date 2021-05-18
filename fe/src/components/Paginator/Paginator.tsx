import React from 'react';
import {
  Button, Stack, Text, useBreakpointValue,
} from '@chakra-ui/react';
import { HomeContext } from '../../pages/Home';

// @todo - Remove this interface after we have a type for Product as "single source of truth".
interface Product {
  id: number;
  name: string;
  description: string;
  isAvailable: boolean;
  imageUrl: string;
}

// @todo - Remove this interface after we have a type for ProductCardItem as "single source of truth".
interface ProductCardItem {
  product: Product;
  // These would be ProductCard specific props..
  quantity: number;
  // etc..
}

interface Props {
  currentPage: number;
  pageCount: number;
}

interface Paginated {
  page: number;
  pageSize: number;
  prevPage: number|null;
  nextPage: number|null;
  itemsCount: number;
  totalPages: number;
  items: Array<ProductCardItem>;
}

export function paginate(items: Array<ProductCardItem>, currentPage: number, pageSize: number): Paginated {
  const offset = (currentPage - 1) * pageSize;

  const paginatedItems = items.slice(offset).slice(0, pageSize);
  const totalPages = Math.ceil(items.length / pageSize);

  return {
    page: currentPage,
    pageSize,
    prevPage: currentPage - 1 ? currentPage - 1 : null,
    nextPage: (totalPages > currentPage) ? currentPage + 1 : null,
    itemsCount: items.length,
    items: paginatedItems,
    totalPages,
  };
}

const Paginator: React.FC<Props> = ({ currentPage, pageCount }: Props): JSX.Element|null => {
  const { setPage } = React.useContext(HomeContext);
  if (pageCount === 1) return null;

  const range: number = useBreakpointValue({ base: 1, lg: 2 }) || 1; // The range of middle pages.
  const left: number = currentPage - range - 1;
  const right: number = currentPage + range;

  // Page numbers starting from 1 - [1, 2, 3, ...]
  const pages: Array<number> = new Array(pageCount);
  for (let i = 0; i < pages.length; i++) {
    if (i === 0 || i === pageCount - 1 || (i >= left && i < right)) {
      pages[i] = i + 1;
    }
  }

  return (
    <Stack spacing={0} direction="row">
      {pages.map(page => (
        <Button
          key={page}
          size="md"
          width={8}
          rounded="none"
          variant="outline"
          isActive={page === currentPage}
          onClick={() => setPage(page)}
        >
          <Text decoration={page === 1 || page === pageCount ? 'underline' : 'none'}>
            {page.toString()}
          </Text>
        </Button>
      ))}
    </Stack>
  );
};

export default Paginator;
