import { memo } from "react";
import { GlHeader } from "gitlanding/GlHeader";
import { declareComponentKeys, useTranslation, useLang } from "i18n";
import { createLanguageSelect } from "onyxia-ui/LanguageSelect";
import type { Language } from "i18n";

const { LanguageSelect } = createLanguageSelect<Language>({
	"languagesPrettyPrint": {
		"en": "English",
	}
})

export const Header = memo(() => {
	const { t } = useTranslation({ Header })
	const { lang, setLang } = useLang();
	return <GlHeader
		title={<h1>{t("headerTitle")}</h1>}
		links={[
			{
				"label": t("link1label"),
				"href": "https://example.com",
			},
			{
				"label": t("link2label"),
				"href": "https://example.com",
			},
			{
				"label": t("link3label"),
				"href": "https://example.com",
			},
		]}
		enableDarkModeSwitch={true}
		githubRepoUrl="https://github.com/torvalds/linux"
		githubButtonSize="large"
		customItemEnd={{
			"item": <LanguageSelect
				language={lang}
				onLanguageChange={setLang}
				variant="big"
			/>
		}}

	/>
});

export const { i18n } = declareComponentKeys<
	| "headerTitle"
	| "link1label"
	| "link2label"
	| "link3label"
>()({ Header });
