import paginationSlice, {
  resetCurrentPageActionCreator,
  resetPaginationActionCreator,
  setCurrentPageActionCreator,
  setPagesActionCreator,
  setPaginationActionCreator,
} from "./paginationSlice";

describe("Given a paginationReducer", () => {
  describe("When it receives an initial status with 0 pages and a setPages action with the number of pages(4) from the api", () => {
    test("Then it should return a new page status with the pages property set to 4", () => {
      const initialStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 8,
      };

      const pagesNumber = 4;

      const expectedNewStatus = {
        ...initialStatus,
        pages: pagesNumber,
      };

      const setPageAction = setPagesActionCreator(pagesNumber);

      const newStatus = paginationSlice(initialStatus, setPageAction);

      expect(newStatus).toEqual(expectedNewStatus);
    });
  });

  describe("When it receives an initial status with currentPage 1 and a setCurrentPage action", () => {
    test("Then it should return a new page status with the currentPage property set to 2", () => {
      const initialStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 8,
      };

      const expectedNewStatus = {
        pages: 0,
        currentPage: 2,
        pagination: 8,
      };

      const setCurrentPageAction = setCurrentPageActionCreator();

      const newStatus = paginationSlice(initialStatus, setCurrentPageAction);

      expect(newStatus).toEqual(expectedNewStatus);
    });
  });

  describe("When it receives an initial status with currentPage 2 and a resetCurrentPage action", () => {
    test("Then it should return a new page status with the currentPage property set to 2", () => {
      const initialStatus = {
        pages: 0,
        currentPage: 2,
        pagination: 8,
      };

      const expectedNewStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 8,
      };

      const resetCurrentPageAction = resetCurrentPageActionCreator();

      const newStatus = paginationSlice(initialStatus, resetCurrentPageAction);

      expect(newStatus).toEqual(expectedNewStatus);
    });
  });

  describe("When it receives an initial status with pagination value 8 and a setPagination action", () => {
    test("Then it should return a new page status with the pagination property set to 16", () => {
      const initialStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 8,
      };

      const expectedNewStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 16,
      };

      const setPaginationAction = setPaginationActionCreator();

      const newStatus = paginationSlice(initialStatus, setPaginationAction);

      expect(newStatus).toEqual(expectedNewStatus);
    });
  });

  describe("When it receives an initial status with pagination value 16 and a resetPagination action", () => {
    test("Then it should return a new page status with the pagination property set to 8", () => {
      const initialStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 16,
      };

      const expectedNewStatus = {
        pages: 0,
        currentPage: 1,
        pagination: 8,
      };

      const resetPaginationAction = resetPaginationActionCreator();

      const newStatus = paginationSlice(initialStatus, resetPaginationAction);

      expect(newStatus).toEqual(expectedNewStatus);
    });
  });
});
