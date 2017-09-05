import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

declare var System: any;

const noProviders: object[] = [];

export function getTranslationProvider(): Promise<object[]> {
    let locale = 'en';

    if (typeof document !== 'undefined') {
        locale = (<any>document)['locale'] as string || locale;
    }

    const filename = `app.${locale}.xlf`;

    return System.import('raw-loader!./' + filename)
        .then((translations: string) => {
            return [
                { provide: TRANSLATIONS, useValue: translations },
                { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
                { provide: LOCALE_ID, useValue: locale }
            ];
        })
        .catch(() => {
            System.import('raw-loader!./app.en.xlf')
                .then((translations: string) => {
                    return [
                        { provide: TRANSLATIONS, useValue: translations },
                        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
                        { provide: LOCALE_ID, useValue: locale }
                    ];
                }).catch((err: any) => {
                    throw err;
                });
        });
}
