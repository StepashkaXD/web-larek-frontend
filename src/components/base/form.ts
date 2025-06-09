import { IForm } from '../../types';

export class Form implements IForm {
    protected _container: HTMLElement;
    protected _form: HTMLFormElement;
    protected _errors: HTMLElement;

    constructor(container: HTMLFormElement) {
        this._container = container;
        this._form = container;
        
        const errorsElement = this._container.querySelector('.form__errors');
        if (!errorsElement) {
            throw new Error('Элемент .form__errors не найден внутри формы.');
        }
        this._errors = errorsElement as HTMLElement;
    }

    render(): HTMLElement {
        return this._container;
    }

    destroy(): void {
        this._container.remove();
    }

    validate(): boolean {
        const inputs = this._form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach((input: HTMLInputElement) => {
            if (input.hasAttribute('required') && !input.value) {
                this.showError(input.name, 'Это поле обязательно для заполнения');
                isValid = false;
            }
        });

        return isValid;
    }

    onInput(field: string, value: string): void {
        const input = this._form.querySelector(`[name="${field}"]`) as HTMLInputElement;
        if (input) {
            input.value = value;
        }
    }

    clear(): void {
        this._form.reset();
        this._errors.innerHTML = '';
    }

    protected showError(field: string, message: string): void {
        const errorElement = document.createElement('div');
        errorElement.classList.add('form__error');
        errorElement.textContent = message;
        this._errors.appendChild(errorElement);
    }

    protected getFormData(): FormData {
        return new FormData(this._form);
    }
} 