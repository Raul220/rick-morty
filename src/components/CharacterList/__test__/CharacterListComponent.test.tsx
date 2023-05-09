/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react'
import CharacterListComponent from '../CharacterListComponent'
import 'jest-environment-jsdom'


describe('Pagination list', () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            }))
        });
    });

    it('Check if title is rendered', async () => {
        render(<CharacterListComponent />);
        const h1Element = screen.getByText(/Rick & Morty Characters/i);
        expect(h1Element).toBeInTheDocument();
    })

    it('Check if the page indicator is in the document', async () => {
        render(<CharacterListComponent />);
        const pageIndicator = screen.getByTestId('current-page');
        expect(pageIndicator).toBeInTheDocument();
    })

    it('Check if page is 1 at beginin', async () => {
        render(<CharacterListComponent />);
        const pageIndicator = screen.getByTestId('current-page');
        expect(pageIndicator.textContent).toBe('1 / ');
    })

    it('Check if go first page buttom is disabled at beginin', async () => {
        render(<CharacterListComponent />);
        const firstPageButton = screen.getByTestId('go-first-page-buttom');
        expect(firstPageButton).toBeDisabled();
    })

    it('Check if go previous page buttom is disabled at beginin', async () => {
        render(<CharacterListComponent />);
        const previousPageButton = screen.getByTestId('go-previous-page-buttom');
        expect(previousPageButton).toBeDisabled();
    })

    it('Check if go next page buttom is not disabled at beginin', async () => {
        render(<CharacterListComponent />);
        const nextPageButton = screen.getByTestId('go-next-page-buttom');
        expect(nextPageButton).not.toBeDisabled();
    })

    it('Check if go last page buttom is not disabled at beginin', async () => {
        render(<CharacterListComponent />);
        const lastPageButton = screen.getByTestId('go-last-page-buttom');
        expect(lastPageButton).not.toBeDisabled();
    })

    it('Check if at secound page the page indicator is 2', async () => {
        render(<CharacterListComponent />);
        const nextPageButton = screen.getByTestId('go-next-page-buttom');
        fireEvent.click(nextPageButton);
        const pageIndicator = screen.getByTestId('current-page').textContent;
        expect(pageIndicator).toBe('2 / ');
    })

    it('Check if go previous page buttom is no disabled when page is 2', async () => {
        render(<CharacterListComponent />);
        const nextPageButton = screen.getByTestId('go-next-page-buttom');
        fireEvent.click(nextPageButton);
        const previousPageButtom = screen.getByTestId('go-previous-page-buttom');
        expect(previousPageButtom).not.toBeDisabled();
    })

    it('Check if go first page buttom is not disabled when page is 2', async () => {
        render(<CharacterListComponent />);
        const nextPageButton = screen.getByTestId('go-next-page-buttom');
        fireEvent.click(nextPageButton);
        const firstPageButtom = screen.getByTestId('go-first-page-buttom');
        expect(firstPageButtom).not.toBeDisabled();
    })
})
