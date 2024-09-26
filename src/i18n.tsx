import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["en"] as const;

//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const { 
	useTranslation, 
	resolveLocalizedString, 
	useLang, 
	$lang,
	useResolveLocalizedString,
	/** For use outside of React */
	getTranslation 
} = createI18nApi<
    | typeof import ("App/Home").i18n
    | typeof import ("App/Header").i18n
		| typeof import ("App/Footer").i18n
>()(
    { languages, fallbackLanguage },
    {
        "en": {
					"Header": {
						"headerTitle": "Title",
						"link1label": "Example page",
						"link2label": "Link 2",
						"link3label": "Link 3"
					},
					"Footer": {
						"license": "License M.I.T",
						"link1label": "Example page",
						"link2label": "Link 2",
						"link3label": "Link 3"
					},
					"Home": {
						"heroTitle": "Hero title",
						"heroSubtitle": "Hero subtitle",
						"articleTitle": "Article title",
						"articleBody": `Do am he horrible distance marriage 
							so although. Afraid assure square so happen mr 
							an before. His many same been well can high that. 
							Forfeited did law eagerness allowance improving 
							assurance bed. Had saw put seven joy short first. 
							Pronounce so enjoyment my resembled in forfeited 
							sportsman. Which vexed did began son 
							abode short may. Interested astonished he at 
							cultivated or me. Nor brought one invited she 
							produce her.`,
						"articleButtonLabel": "Article button label",
						"card1Title": "Card title 1",
						"card2Title": "Card title 2",
						"card3Title": "Card title 3",
						"card1Paragraph": `Dissuade ecstatic and properly saw 
							entirely sir why laughter endeavor. 
							In on my jointure horrible margaret suitable 
							he followed speedily.`,
						"card2Paragraph": `Dissuade ecstatic and properly saw 
							entirely sir why laughter endeavor. 
							In on my jointure horrible margaret suitable 
							he followed speedily.`,
						"card3Paragraph": `Dissuade ecstatic and properly saw 
							entirely sir why laughter endeavor. 
							In on my jointure horrible margaret suitable 
							he followed speedily.`,
					}
        }
    }
);