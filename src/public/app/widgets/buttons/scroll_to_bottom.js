import OnClickButtonWidget from './onclick_button.js';
import { t } from '../../services/i18n.js';

export default class ScrollToBottomButton extends OnClickButtonWidget {
    constructor() {
        super();

        this.icon('bx-chevron-down')
            .title(t('onclick_button.scroll_to_bottom'))
            .class('icon-action')
            .onClick((widget, evt) => {
                const $noteSplit = $(`.note-split[data-ntx-id="${this.noteContext.ntxId}"]`);
                const $scrollingContainer = $noteSplit.children('.scrolling-container');
                $scrollingContainer.scrollTop($scrollingContainer[0].scrollHeight);
            });
    }
}
