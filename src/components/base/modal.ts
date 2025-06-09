import { IModal } from '../../types';

export class Modal implements IModal {
    protected _container: HTMLElement;
    protected _content: HTMLElement;

    constructor(container: HTMLElement) {
        this._container = container;
        const contentElement = this._container.querySelector('.modal__content');
        if (!contentElement) {
            throw new Error('Элемент .modal__content не найден внутри контейнера модального окна.');
        }
        this._content = contentElement as HTMLElement;
    }

    render(): HTMLElement {
        return this._container;
    }

    destroy(): void {
        this._container.remove();
    }

    open(): void {
        this._container.classList.add('modal_active');
        document.body.style.overflow = 'hidden';
    }

    close(): void {
        this._container.classList.remove('modal_active');
        document.body.style.overflow = '';
    }

    protected setContent(content: HTMLElement): void {
        this._content.innerHTML = '';
        this._content.appendChild(content);
    }
} 