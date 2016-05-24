//<syntaxhighlight lang="javascript">
/*
 *  TEXT - Custom text used in the script to explain what's happening. $1 means that the script will input a number / word / url here on the fly, and is expected / potentially important.
 *         This i18n is set depending on your local language (en if not available).
 *
 * https://github.com/Wikia/app/tree/808a769df6cf8524aa6defcab4f971367e3e3fd8/languages/messages
 * Search: /api.php?action=query&meta=allmessages&format=jsonfm&amfilter=searchterm
 * MESSAGES - This contains words used in the actual RC page. Only the English information is listed below, because the script prompts the server for those translations by looping through the IDs list in RC_TEXT.
 * 			 Since some languages depend on the English defaults for things (like "minoreditletter"), it's values are default (to avoid having to load english first).
 * 			 POTENTIAL ISSUES:
 * 			 	* Script cannot check proper use of "{{GENDER}}" (gender is hidden by external API calls for security), so just does male.
  * mediawiki.language.data - "mwLanguageData" can be found by finding [ mw.loader.implement("mediawiki.language.data" ] in the page source. If not found may be cached, so visit page using a "private / incognito" window.
 */
window.dev.RecentChangesMultiple.i18n = (function($, document, mw, module){
	"use strict";
	var i18n = function(pKey){
		arguments[0] = i18n.TEXT[pKey] || i18n.MESSAGES[pKey];
		if(arguments[0] == undefined) {
			console.log("[RecentChangesMultiple.i18n]() "+pKey+" is undefined.");
			// if(module.debug) { throw(pKey); }
			return pKey;
		}
		return i18n.wiki2html.apply(i18n, arguments);
	}
	
	i18n.TEXT = {
		en: { // English (ENGLISH)
			// Errors
			'rcm-error-linkformat' : "'$1' is an incorrect format. Please do '''not''' include 'http://' or anything after the domain, including the first '/'.",
			'rcm-error-loading-syntaxhang' : "Error loading [$1] ($2 tries). Please correct syntax (or refresh script to try again).",
			'rcm-error-loading-connection' : "Error loading [$1] ($2 tries). Most likely a connection issue; refresh script to try again.",
			'rcm-error-trymoretimes' : "Try $1 more times",
			// Notifications
			'rcm-loading' : "Loading/Sorting...",
			'rcm-refresh' : "Refresh",
			'rcm-download-timestamp' : "Recent Changes downloaded at: $1",
			'rcm-download-changesadded' : " - [$1 Recent Changes added]",
			// Basics
			'rcm-wikisloaded' : "Wikis Loaded: ",
			'rcm-previouslyloaded' : "Previously loaded:",
			'rcm-nonewchanges' : "No new changes",
			'rcm-autorefresh' : "Auto Refresh",
			'rcm-autorefresh-tooltip' : "Automatically refreshes Recent Changes every $1 seconds",
			'rcm-footer' : "Version $1 by $2",
			// Options Panel
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Save changes with cookie",
			// Modules
			'rcm-module-diff-title' : "Diff Viewer",
			'rcm-module-diff-open' : "Open diff",
			'rcm-module-diff-undo' : "Undo edit",
			// Other
			'rcm-unknownthreadname' : "thread", // If name of a wall/board thread is not found, this will take it's place.
			/***************************
			 * mediawiki.language.data - found by finding [ mw.loader.implement("mediawiki.language.data" ] in the page source. If not found may be cached, so visit page using a "private / incognito" window.
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null,
				"separatorTransformTable": null,
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null,
				"fallbackLanguages": []
			},
		},
		ca: { // Català (CATALAN) @author: Josep Maria Roca Peña
			// Errors
			'rcm-error-linkformat' : "'$1' és un format incorrecte. Si us plau, no afegeixis 'http://' o alguna cosa darrere del domini, incloent el primer '/'.",
			'rcm-error-loading-syntaxhang' : "Error de càrrega [$1] ($2 intents). Si us plau, corregeix les teves sintaxis (o recarrega el teu script i intenta-ho un altre cop).",
			'rcm-error-loading-connection' : "Error de càrrega [$1] ($2 intents). A causa d'un error de connexió, has de recarregar el teu script i intenta-ho un altre cop.",
			'rcm-error-trymoretimes' : "Intenta-ho $1 més vegades",
			// Notificacions
			'rcm-loading' : "Carregant/Classificant…",
			'rcm-refresh' : "Actualització automàtica",
			'rcm-download-timestamp' : "Canvis recents baixats a: $1",
			'rcm-download-changesadded' : " - [$1 Canvis recents afegits]",
			// Bàsics
			'rcm-wikisloaded' : "Wikis carregats: ",
			'rcm-previouslyloaded' : "Breument carregats:",
			'rcm-nonewchanges' : "No hi ha nous canvis",
			'rcm-autorefresh' : "Actualització automàtica",
			'rcm-autorefresh-tooltip' : "Recarrega automàticament els canvis recents cada $1 segons",
			'rcm-footer' : "Versió $1 de $2",
			// Panell d'opcions
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Guarda els canvis pel cookie",
			// Mòduls
			'rcm-module-diff-title' : "Visualitzador de pàgina",
			'rcm-module-diff-open' : "Obre la pàgina",
			'rcm-module-diff-undo' : "Desfés el canvi",
			// Altres
			'rcm-unknownthreadname' : "tema",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": ".",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["en"]
			},
		},
		es: { // Español (SPANISH) @author: Paynekiller92
			// Errors
			'rcm-error-linkformat' : "'$1' es un formato incorrecto. Por favor '''no''' incluyas 'http://' o cualquier cosa después, incluyendo el primer '/'.",
			'rcm-error-loading-syntaxhang' : "Error cargando [$1] ($2 intentos). Por favor corrige la sintaxis (o recarga el script para intentarlo otra vez).",
			'rcm-error-loading-connection' : "Error cargando [$1] ($2 intentos). Seguramente sea un problema de conexión; recarga el script para intentarlo otra vez.",
			'rcm-error-trymoretimes' : "Inténtalo $1 veces más",
			// Notifications
			'rcm-loading' : "Cargando/Clasificando...",
			'rcm-refresh' : "Recargar",
			'rcm-download-timestamp' : "Cambios recientes descargados en: $1",
			'rcm-download-changesadded' : " - [$1 Cambios Recientes añadidos]",
			// Basics
			'rcm-wikisloaded' : "Wikis Cargados: ",
			'rcm-previouslyloaded' : "Previamente cargados:",
			'rcm-nonewchanges' : "No hay nuevos cambios",
			'rcm-autorefresh' : "Auto Recargar",
			'rcm-autorefresh-tooltip' : "Recarga los Cambios Recientes automáticamente cada $1 segundos",
			'rcm-footer' : "Versión $1 por $2",
			// Options Panel
			// 'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			// 'rcm-optionspanel-savewithcookie': "Save changes with cookie",
			// Modules
			'rcm-module-diff-title' : "Visor de cambios",
			'rcm-module-diff-open' : "Abrir cambio",
			'rcm-module-diff-undo' : "Deshacer edición",
			// Other
			'rcm-unknownthreadname' : "hilo", // If name of a wall/board thread is not found, this will take it's place.
			/***************************
			 * mediawiki.language.data - found by finding [ mw.loader.implement("mediawiki.language.data" ] in the page source. If not found may be cached, so visit page using a "private / incognito" window.
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null,
				"separatorTransformTable": null,
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null,
				"fallbackLanguages": []
			},
		},
		gl: { // Galego (GALICIAN) @author: Josep Maria Roca Peña
			// Erros
			'rcm-error-linkformat' : "'$1' é un formato incorrecto. Por favor, non tes que engadir 'http://' ou algunha cousa despois do dominio, incluíndo o primeiro '/'.",
			'rcm-error-loading-syntaxhang' : "Erro de carregamento [$1] ($2 tentativas). Por favor, corrixe as túas sintaxes (ou recarrega o teu script e téntao novamente).",
			'rcm-error-loading-connection' : "Erro de carregamento [$1] ($2 tentativas). Debido a un erro de conexión, tes de recarregar o teu script e téntao novamente.",
			'rcm-error-trymoretimes' : "Téntao $1 máis veces",
			// Notificacións
			'rcm-loading' : "A cargar/A clasificar…",
			'rcm-refresh' : "Actualización automática",
			'rcm-download-timestamp' : "Cambios recentes baixados en: $1",
			'rcm-download-changesadded' : " - [$1 Cambios recentes engadidos]",
			// Básicos
			'rcm-wikisloaded' : "Wikis cargados: ",
			'rcm-previouslyloaded' : "Brevemente cargados:",
			'rcm-nonewchanges' : "Non hai novos cambios",
			'rcm-autorefresh' : "Actualización automática",
			'rcm-autorefresh-tooltip' : "Recarregar automaticamente os cambios recentes cada $1 segundos",
			'rcm-footer' : "Versión $1 de $2",
			// Panel de opcións
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Gardar cambios polo cookie",
			// Módulos
			'rcm-module-diff-title' : "Visualizador de páxina",
			'rcm-module-diff-open' : "Abrir páxina",
			'rcm-module-diff-undo' : "Desfacer cambio",
			// Outros
			'rcm-unknownthreadname' : "tópico",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": ".",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["pt", "en"]
			},
		},
		it: { // Italiano (ITALIAN) @author: Josep Maria Roca Peña
			// Errori
			'rcm-errore-linkformat' : "'$1' è un formato incorretto. Ti prego di '''non''' includere 'http://' o qualsiasi cosa dopo, includendo le prime '/'.",
			'rcm-Errore-loading-syntaxhang' : "Errore caricando [$1] ($2 intenti). Per favore, corregge la tua sintassi (o ricarica il tuo script per tentarlo un'altra volta).",
			'rcm-Errore-loading-connection' : "Errore caricando [$1] ($2 intenti). Sicuramente sia un problema di connessione; recarga lo script per tentarlo un'altra volta.",
			'rcm-Errore-trymoretimes' : "Tentare $1 volte più",
			// Notifiche
			'rcm-loading' : "Caricando/Classificando…",
			'rcm-refresh' : "Ricaricare",
			'rcm-download-timestamp' : "Cambi recenti scaricati in: $1",
			'rcm-download-changesadded' : " - [$1 Cambi recenti aggiunti]",
			// Basici
			'rcm-wikisloaded' : "Le tue wiki caricate:",
			'rcm-previouslyloaded' : "Previamente caricate:",
			'rcm-nonewchanges' : "Non ci sono nuovi cambi",
			'rcm-autorefresh' : "Aggiornamento automatico",
			'rcm-autorefresh-tooltip' : "Ricaricare i cambi recenti automaticamente ogni $1 secondi",
			'rcm-footer' : "Versione $1 da $2",
			// Pannello di opzioni
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Salvare i cambi dal cookie",
			// Moduli
			'rcm-module-diff-title' : "Visualizzatore di pagina",
			'rcm-module-diff-open' : "Aprire pagina",
			'rcm-module-diff-undo' : "Disfare edizione",
			// Altri
			'rcm-unknownthreadname' : "conversazione",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": " ",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["en"]
			},
		},
		oc: { // Occitan (OCCITAN) @author: Josep Maria Roca Peña
			// Errors
			'rcm-error-linkformat' : "'$1' es un format incorrècte. Se vos plai, apondètz pas 'http://' o quicòm darrièr del domeni, en comprenent lo primièr '/'.",
			'rcm-Error-loading-syntaxhang' : "Error de carga [$1] ($2 assages). Se vos plai, corregissètz las vòstras sintaxis (o recarga lo vòstre script e ensaja-o un autre còp).",
			'rcm-Error-loading-connection' : "Error de carga [$1] ($2 assages). A causa d'un error de connexion, te cal recargar lo tieu script e ensaja-o un autre còp.",
			'rcm-Error-trymoretimes' : "Ensaja-o $1 mai de còps",
			// Notificacions
			'rcm-loading' : "En cargant/En classificant…",
			'rcm-refresh' : "Actualizacion automatica",
			'rcm-download-timestamp' : "Cambiaments recents davalats sus: $1",
			'rcm-download-changesadded' : " - [$1 Cambiaments recents apondis]",
			// Basics
			'rcm-wikisloaded' : "Wikis cargats: ",
			'rcm-previouslyloaded' : "Brèvament cargats:",
			'rcm-nonewchanges' : "I a pas de nòus cambiaments",
			'rcm-autorefresh' : "Actualizacion automatica",
			'rcm-autorefresh-tooltip' : "Recargatz automaticament los cambiaments recents cada $1 segon",
			'rcm-footer' : "Version $1 de $2",
			// Panèl d'opcions
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Gardatz los cambiaments pel cookie",
			// Moduls
			'rcm-module-diff-title' : "Visualitzador de pagina",
			'rcm-module-diff-open' : "Dobrissètz la pagina",
			'rcm-module-diff-undo' : "Desfasètz lo cambiament",
			// Autras
			'rcm-unknownthreadname' : "tèma",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": " ",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["en"]
			},
		},
		pl: { // Polski (POLISH) - @author: Szynka013, Matik7
			// Errors
			'rcm-error-linkformat' : "'$1' to nieodpowiedni format. Proszę nie używać elementu 'http://', niczego po nim oraz pierwszego '/'.",
			'rcm-error-loading-syntaxhang' : "Błąd podczas wczytywania [$1] (prób: $2) Proszę poprawić syntax (lub odświeżyć skrypt by spróbować ponownie).",
			'rcm-error-loading-connection' : "Błąd podczas wczytywania [$1] (prób: $2). Najprawdopodobniej jest to błąd z połączeniem, odśwież skrypt by spróbować ponownie.",
			'rcm-error-trymoretimes' : "Spróbuj $1 razy",
			// Notifications
			'rcm-loading' : "Ładowanie/Sortowanie...",
			'rcm-refresh' : "Odśwież",
			'rcm-download-timestamp' : "Ostatnie zmiany pobrane o: $1",
			'rcm-download-changesadded' : " - [$1 dodanych ostatnich zmian]",
			// Basics
			'rcm-wikisloaded' : "Załadowane wiki: ",
			'rcm-previouslyloaded' : "Poprzednio załadowane:",
			'rcm-nonewchanges' : "Brak nowych zmian",
			'rcm-autorefresh' : "Automatyczne odświeżanie",
			'rcm-autorefresh-tooltip' : "Automatyczne odświeżanie ostatnich zmian co każde $1 sekund",
			'rcm-footer' : "Wersja $1 stworzona przez $2",
			// Options Panel
			// 'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Zapisz zmiany w pamięci podręcznej",
			// Modules
			'rcm-module-diff-title' : "Podgląd zmian",
			'rcm-module-diff-open' : "Pokaż zmiany",
			'rcm-module-diff-undo' : "Cofnij zmiany",
			// Other
			'rcm-unknownthreadname' : "wątek", // If name of a wall/board thread is not found, this will take it's place.
			/***************************
			 * mediawiki.language.data - found by finding [ mw.loader.implement("mediawiki.language.data" ] in the page source. If not found may be cached, so visit page using a "private / incognito" window.
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null,
				"separatorTransformTable": {",": " ",".": ","},
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1", "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, …", "v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, …"],
				"digitGroupingPattern": null,
				"fallbackLanguages": ["en"]
			},
		},
		pt: { // Português europeu (PORTUGUESE EUROPE) @author: Josep Maria Roca Peña
			// Erros
			'rcm-error-linkformat' : "'$1' é um formato incorrecto. Por favor, não tens de acrescentar 'http://' ou alguma coisa depois do domínio, incluindo o primeiro '/'.",
			'rcm-error-loading-syntaxhang' : "Erro de carregamento [$1] ($2 tentativas). Por favor, corrige as tuas sintaxes (ou recarrega o teu script e tenta novamente).",
			'rcm-error-loading-connection' : "Erro de carregamento [$1] ($2 tentativas). Devido a um erro de conexão, tens de recarregar o teu script e tenta novamente.",
			'rcm-error-trymoretimes' : "Tenta $1 mais vezes",
			// Notificações
			'rcm-loading' : "A carregar/A classificar…",
			'rcm-refresh' : "Actualização automática",
			'rcm-download-timestamp' : "Mudanças recentes baixadas em: $1",
			'rcm-download-changesadded' : " - [$1 Mudanças recentes acrescentadas]",
			// Básicos
			'rcm-wikisloaded' : "Wikis carregados: ",
			'rcm-previouslyloaded' : "Brevemente carregados:",
			'rcm-nonewchanges' : "Não há novas mudanças",
			'rcm-autorefresh' : "Actualização automática",
			'rcm-autorefresh-tooltip' : "Recarregar automaticamente as mudanças recentes a cada $1 segundos",
			'rcm-footer' : "Versão $1 de $2",
			// Painel de opções
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Guardar mudanças pelo cookie",
			// Módulos
			'rcm-module-diff-title' : "Visualizador de página",
			'rcm-module-diff-open' : "Abrir página",
			'rcm-module-diff-undo' : "Desfazer mudança",
			// Outros
			'rcm-unknownthreadname' : "tópico",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": " ",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["n = 0..2 and n != 2 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["pt-br", "en"]
			},
		},
		"pt-br": { // Português brasileiro (PORTUGUESE BRAZIL) @author: DannielaServer 
			// Erros
			'rcm-error-linkformat' : "'$1' é um formato incorreto. Por favor, não inclua 'http://' ou alguma coisa depois do domínio, incluindo a primeira '/'.",
			'rcm-error-loading-syntaxhang' : "Erro de carregamento [$1] ($2 tentativas). Por favor, corrija as suas sintaxes (ou recarregue o seu script para tentar novamente).",
			'rcm-error-loading-connection' : "Erro de carregamento [$1] ($2 tentativas). Devido a um erro de conexão,; recarregue o script e tente novamente.",
			'rcm-error-trymoretimes' : "Tente $1 mais vezes",
			// Notificações
			'rcm-loading' : "Carregando/Classificando...",
			'rcm-refresh' : "Auto refresh para atualizar automaticamente",
			'rcm-download-timestamp' : "Mudanças recentes baixadas em: $1",
			'rcm-download-changesadded' : " - [$1 Mudanças recentes adicionadas]",
			// Básicos
			'rcm-wikisloaded' : "Wikias carregadas: ",
			'rcm-previouslyloaded' : "Brevemente carregadas:",
			'rcm-nonewchanges' : "Não há novas mudanças",
			'rcm-autorefresh' : "Auto refresh para atualizar automaticamente",
			'rcm-autorefresh-tooltip' : "Recarregar automaticamente as mudanças recentes a cada $1 segundos",
			'rcm-footer' : "Versão $1 de $2",
			// Painel de opções
			'rcm-optionspanel-hideusersoverride': "data-hideusers o substitui",
			'rcm-optionspanel-savewithcookie': "Salvar mudanças pelo cookie",
			// Modulos
			'rcm-module-diff-title' : "Visualizador de página",
			'rcm-module-diff-open' : "Abrir página",
			'rcm-module-diff-undo' : "Desfazer mudança",
			// Outros
			'rcm-unknownthreadname' : "tópico",
			/***************************
			 * mediawiki.language.data - found by finding [ mw.loader.implement("mediawiki.language.data" ] in the page source. If not found may be cached, so visit page using a "private / incognito" window.
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": " ",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["n = 0..2 and n != 2 @integer 0, 1 @decimal 0.0, 1.0, 0.00, 1.00, 0.000, 1.000, 0.0000, 1.0000"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["pt", "en"]
			},
		},
		ro: { // Română (ROMANIAN) @author: Josep Maria Roca Peña
			// Erori
			'rcm-eroare-linkformat' : "'$1' este un format incorect. Te rog să nu incluzi 'http://' sau oricare lucru după aceea, incluzând primul '/'.",
			'rcm-eroare-loading-syntaxhang' : "Eroare încărcând [$1] ($2 încercări). Te rog să corectezi sintaxele (sau reîncărca-ţi script-ul pentru a încerca din nou).",
			'rcm-eroare-loading-connection' : "Eroare încărcând [$1] ($2 încercări). Cu siguranţă, este o problemă de conexiune; reîncărca-ţi script-ul pentru a încerca din nou.",
			'rcm-eroare-trymoretimes' : "Încearcă-l mai mult de $1 ori",
			// Înştiinţări
			'rcm-loading' : "Încărcând/Clasificând…",
			'rcm-refresh' : "Reîncărcare",
			'rcm-download-timestamp' : "Schimburi recente descărcate pe: $1",
			'rcm-download-changesadded' : " - [$1 Schimburi recente adăugate]",
			// Bazici
			'rcm-wikisloaded' : "Wiki-uri încărcate: ",
			'rcm-previouslyloaded' : "În prealabil încărcate:",
			'rcm-nonewchanges' : "Nu există noi schimburi",
			'rcm-autorefresh' : "Actualizare automată",
			'rcm-autorefresh-tooltip' : "Reîncărcaţi schimburile recente în mod automat fiecare $1 secunde",
			'rcm-footer' : "Versiune $1 de $2",
			// Panou de opţiuni
			// 'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			// 'rcm-optionspanel-savewithcookie': "Păstraţi schimburi dinspre cookie",
			// Module
			'rcm-module-diff-title' : "Vizualizatorul paginei",
			'rcm-module-diff-open' : "Deschideţi pagina",
			'rcm-module-diff-undo' : "Desfaceţi ediţia",
			// Mai mult
			'rcm-unknownthreadname' : "fir",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": {
					",": ".",
					".": ","
				},
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1", "v != 0 or n = 0 or n != 1 and n % 100 = 1..19 @integer 0, 2~16, 101, 1001, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["en"]
			},
		},
		val: { // Valencià (VALENCIAN) @author: Josep Maria Roca Peña
			// Errors
			'rcm-error-linkformat' : "$1'' és un format incorrecte. Per favor, no afiggues 'http://' o alguna cosa darrere del domini, incloent el primer '/'.",
			'rcm-error-loading-syntaxhang' : "Error de càrrega [$1] ($2 intents). Per favor, corrig les tues sintaxis (o recarrega la tua script i intenta-ho un atre colp).",
			'rcm-error-loading-connection' : "Error de càrrega [$1] ($2 intents). Per un error de conexió, tens que recarregar la tua script i intenta-ho un atre colp.",
			'rcm-error-trymoretimes' : "Intenta-ho $1 més voltes",
			// Notificacions
			'rcm-loading' : "Carregant/Classificant…",
			'rcm-refresh' : "Actualisació automàtica",
			'rcm-download-timestamp' : "Canvis recents baixats a: ",
			'rcm-download-changesadded' : " - [$1 Canvis recents afegits]",
			// Bàsics
			'rcm-wikisloaded' : "Wikis carregats: ",
			'rcm-previouslyloaded' : "Breument carregats:",
			'rcm-nonewchanges' : "No hi ha nous canvis",
			'rcm-autorefresh' : "Actualisació automàtica",
			'rcm-autorefresh-tooltip' : "Recarregar automàticament els canvis recents cada $1 segons",
			'rcm-footer' : "Versió $1 de $2",
			// Panel d'opcions
			'rcm-optionspanel-hideusersoverride': "data-hideusers overrides this.",
			'rcm-optionspanel-savewithcookie': "Guardar els canvis pel cookie",
			// Mòduls
			'rcm-module-diff-title' : "Visualisador de pàgina",
			'rcm-module-diff-open' : "Obrir la pàgina",
			'rcm-module-diff-undo' : "Desfer el canvi",
			// Atres
			'rcm-unknownthreadname' : "tema",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": null ,
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["en"]
			},
		},
		zh: { // 中文 (CHINESE) @author: TsukiYaksha
			
			'rcm-error-linkformat' : "「$1」为错误格式。请'''不要'''在网域后加入「http://」或任何文字，包括第一个「/」字符。",
			'rcm-error-loading-syntaxhang' : "读取[$1]时发生错误（$2次尝试）。请更正语法（或刷新语法后再试一次）。",
			'rcm-error-loading-connection' : "读取[$1]时发生错误（$2次尝试）。极可能为联机问题。请刷新语法后再试一次。",
			'rcm-error-trymoretimes' : "请再试$1次",
			
			'rcm-loading' : "正在载入／整理中......",
			'rcm-refresh' : "刷新",
			'rcm-download-timestamp' : "最近更改于$1载入",
			'rcm-download-changesadded' : " - [已添加$1个最近更改内容]",
			
			'rcm-wikisloaded' : "已载入的维基：",
			'rcm-previouslyloaded' : "之前已加载：",
			'rcm-nonewchanges' : "无新更动",
			'rcm-autorefresh' : "自动刷新",
			'rcm-autorefresh-tooltip' : "每隔$1秒自动更新最近更改",
			'rcm-footer' : "由$2编辑的版本$1",
			
			'rcm-optionspanel-hideusersoverride': "以data-hideusers覆盖原有设定。",
			'rcm-optionspanel-savewithcookie': "使用cookie储存变动",
			
			'rcm-module-diff-title' : "差异查看器",
			'rcm-module-diff-open' : "开启差异",
			'rcm-module-diff-undo' : "复原编辑", 
			
			'rcm-unknownthreadname' : "话题",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": null ,
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["zh-hans", "en"]
			},
		},
		"zh-hant": { // 中文 (繁體) (CHINESE TRADITIONAL) @author: TsukiYaksha
			
			'rcm-error-linkformat' : "「$1」為錯誤格式。請'''不要'''在網域後加入「http://」或任何文字，包括第一個「/」字元。",
			'rcm-error-loading-syntaxhang' : "讀取[$1]時發生錯誤（$2 次嘗試）。請更正語法（或重新載入語法後再試一次）。",
			'rcm-error-loading-connection' : "讀取[$1]時發生錯誤（$2 次嘗試）。極可能為連線問題。請重新載入語法後再試一次。",
			'rcm-error-trymoretimes' : "請再試$1次",
			
			'rcm-loading' : "正在載入／整理中......",
			'rcm-refresh' : "重新整理",
			'rcm-download-timestamp' : "近期變動於$1載入",
			'rcm-download-changesadded' : " - [已新增$1個近期變動內容]",
			
			'rcm-wikisloaded' : "已載入的維基：",
			'rcm-previouslyloaded' : "之前已載入：",
			'rcm-nonewchanges' : "無新變更",
			'rcm-autorefresh' : "自動重整",
			'rcm-autorefresh-tooltip' : "每隔$1秒自動更新近期變動",
			'rcm-footer' : "由$2編輯的版本$1",
			
			'rcm-optionspanel-hideusersoverride': "以data-hideusers覆蓋原有設定。",
			'rcm-optionspanel-savewithcookie': "使用cookie儲存變動",
			
			'rcm-module-diff-title' : "差異檢視器",
			'rcm-module-diff-open' : "開啟差異",
			'rcm-module-diff-undo' : "復原編輯", 
			
			'rcm-unknownthreadname' : "討論串",
			/***************************
			 * mediawiki.language.data
			 ***************************/
			mwLanguageData: {
				"digitTransformTable": null ,
				"separatorTransformTable": null ,
				"grammarForms": [],
				"pluralRules": ["i = 1 and v = 0 @integer 1"],
				"digitGroupingPattern": null ,
				"fallbackLanguages": ["zh-hans", "en"]
			},
		},
	};
	
	/*******************************************************************************
	 * DO NOT CHANGE THIS WHEN TRANSLATING
	 * MESSAGES is all text that is retrieved from the Wikia servers for any supported language.
	 * If it is necessary to overwrite a system message, simply add its key to the TEXT object with the new text for your language.
	 *******************************************************************************/
	i18n.MESSAGES = {
		/***************************
		 * Common Stuff
		 ***************************/
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/languages/messages/MessagesEn.php
		'talkpagelinktext' : 'Talk', // L830 - "Talk" is more inter-wiki appropriate than "wall" (wall-message-wall-shorten)
		'cur' : 'cur', // L1492
		'last' : 'prev', // L1494
		'recentchanges-legend' : 'Recent changes options', // 2038
		'rclinks' : 'Show last $1 changes in last $2 days<br />$3', // 2054
		'rcshowhideminor'		: '$1 minor edits', // 2048
		'rcshowhidebots'		: '$1 bots', // 2049
		'rcshowhideliu'			: '$1 logged-in users', // 2050
		'rcshowhideanons'		: '$1 anonymous users', // 2051
		// 'rcshowhidepatr'		: '$1 patrolled edits', // 2052
		'rcshowhidemine'		: '$1 my edits', // 2053
		'rcshowhideenhanced'	: '$1 grouped recent changes',
		'rcshowhidelogs'		: '$1 logs',
		'diff' : 'diff', // L2055
		'hist' : 'hist', // L2056
		'hide' : 'Hide', // L2057
		'show' : 'Show', // L2058
		'minoreditletter' : 'm',
		'newpageletter' : 'N', // L2060
		'boteditletter' : 'b',
		'unpatrolledletter' : '!',
		'blocklink' : 'block', // L3150
		'contribslink' : 'contribs', // L3153
		'nchanges' : '$1 {{PLURAL:$1|change|changes}}', // L4650
		'rollbacklink' : 'rollback', // L2869
		// Tooltips
		'recentchanges-label-newpage' : 'This edit created a new page', // L2041
		'recentchanges-label-minor' : 'This is a minor edit',
		'recentchanges-label-bot' : 'This edit was performed by a bot',
		'recentchanges-label-unpatrolled' : 'This edit has not yet been patrolled',
		'rc-enhanced-expand' : 'Show details (requires JavaScript)', // L2070
		'rc-enhanced-hide' : 'Hide details', // L2071
		// "Extra" support - "# only translate this message to other languages if you have to change it"
		'semicolon-separator' : ';&#32;',
		'pipe-separator' : '&#32;|&#32;',
		'parentheses' : '($1)',
		// Revision deletion
		'rev-deleted-comment' : '(edit summary removed)',
		'rev-deleted-user' : '(username removed)',
		'rev-deleted-event' : '(log action removed)',
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/ArticleComments/ArticleComments.i18n.php
		'article-comments-rc-comment' : 'Article comment (<span class="plainlinks">[$1 $2]</span>)',
		'article-comments-rc-comments' : 'Article comments ([[$1]])',
		'and' : '&#32;and',
		// Wiki Infobar
		'recentchanges' : 'Recent changes',
		'newpages' : 'New pages',
		'newimages' : 'New photos', // There is no text for "New Files"; this was closest I could find. Alts: prefs-files (Files), listfiles (File list), statistics-files (Uploaded files)
		'log' : 'Logs',
		'insights' : 'Insights',
		'randompage' : 'Random page',
		'group-sysop' : 'Administrators',
		'group-user' : 'Users',
		'prefs-files' : 'Files',
		'awc-metrics-articles' : 'Articles',
		'awc-metrics-edits' : 'Edits',
		'filedelete-success' : "'''$1''' has been deleted.",
		'shared_help_was_redirect' : 'This page is a redirect to $1',
		'specialvideos-btn-load-more' : 'Load More',
		'flags-edit-modal-close-button-text' : 'Close',
		'awc-metrics-images' : 'Images',
		
		/***************************
		 * Log Names - wgLogHeaders
		 ***************************/
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/languages/messages/MessagesEn.php
		'blocklogpage'						: 'Block log', // L3157
		'dellogpage'						: 'Deletion log', // L2848
		'importlogpage'						: 'Import log',// L3422
		'mergelog'							: 'Merge log', // L1643
		'movelogpage'						: 'Move log', // L3285
		'protectlogpage'					: 'Protection log', // L2890
		'uploadlogpage'						: 'Upload log', // L2115
		'newuserlogpage'					: 'User creation log', // L2695
		'rightslog'							: 'User rights log', // L1991
		// ## Non-standard Mediawiki logs ##
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/UserProfilePageV3/UserProfilePage.i18n.php
		'useravatar-log'					: 'User avatar log',
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/UserRenameTool/SpecialRenameuser.i18n.php
		'userrenametool-logpage'			: 'User rename log',
		// ## Wiki Features ##
		// https://github.com/Wikia/app/blob/bf1e586c95224922577b6feea8293df341265a44/extensions/wikia/WikiFeatures/WikiFeatures.i18n.php
		'wikifeatures-log-name'				: 'Wiki Features log',
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/Chat2/Chat.i18n.php
		'chat-chatban-log'					: 'Chat ban log',
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/WikiaMaps/WikiaMaps.i18n.php
		'wikia-interactive-maps-log-name'	: 'Maps log',
		// ## Extensions ##
		// https://git.wikimedia.org/blob/mediawiki%2Fextensions%2FAbuseFilter/be09eabbdd591fb869b30cd4e77a286763cbe4e1/i18n%2Fen.json
		'abusefilter-log'					: 'Abuse filter log',
		
		/***************************
		 * Log Actions - 
		 ***************************/
		// https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/languages/messages/MessagesEn.php
		// Block
		'blocklogentry'                   : 'blocked [[$1]] with an expiry time of $2 $3',
		'reblock-logentry'                : 'changed block settings for [[$1]] with an expiry time of $2 $3',
		'unblocklogentry'                 : 'unblocked $1',
		
		'block-log-flags-anononly'        : 'anonymous users only',
		'block-log-flags-nocreate'        : 'account creation disabled',
		'block-log-flags-noautoblock'     : 'autoblock disabled',
		'block-log-flags-noemail'         : 'e-mail blocked',
		'block-log-flags-nousertalk'      : 'cannot edit own talk page',
		'block-log-flags-angry-autoblock' : 'enhanced autoblock enabled',
		'block-log-flags-hiddenname'      : 'username hidden',
		// Delete
		'logentry-delete-delete'              : '$1 deleted page $3',
		'logentry-delete-restore'             : '$1 restored page $3',
		'logentry-delete-event'               : '$1 changed visibility of {{PLURAL:$5|a log event|$5 log events}} on $3: $4',
		'logentry-delete-revision'            : '$1 changed visibility of {{PLURAL:$5|a revision|$5 revisions}} on page $3: $4',
		'logentry-delete-event-legacy'        : '$1 changed visibility of log events on $3',
		'logentry-delete-revision-legacy'     : '$1 changed visibility of revisions on page $3',
		
		'revdelete-content-hid'               : 'content hidden',
		'revdelete-summary-hid'               : 'edit summary hidden',
		// Import
		'import-logentry-upload'           : 'imported [[$1]] by file upload',
		'import-logentry-interwiki'        : 'transwikied $1',
		// Merge
		'pagemerge-logentry'	: 'merged [[$1]] into [[$2]] (revisions up to $3)',
		// Move
		'logentry-move-move'                  : '$1 moved page $3 to $4',
		'logentry-move-move-noredirect'       : '$1 moved page $3 to $4 without leaving a redirect',
		'logentry-move-move_redir'            : '$1 moved page $3 to $4 over redirect',
		'logentry-move-move_redir-noredirect' : '$1 moved page $3 to $4 over a redirect without leaving a redirect',
		// Protect
		'protectedarticle'            : 'protected "[[$1]]"',
		'modifiedarticleprotection'   : 'changed protection level for "[[$1]]"',
		'unprotectedarticle'          : 'removed protection from "[[$1]]"',
		'movedarticleprotection'      : 'moved protection settings from "[[$2]]" to "[[$1]]"',
		// Upload
		'uploadedimage'               : 'uploaded "[[$1]]"',
		'overwroteimage'              : 'uploaded a new version of "[[$1]]"',
		// New User
		'logentry-newusers-newusers'          : '$1 created a user account',
		'logentry-newusers-create'            : '$1 created a user account',
		'logentry-newusers-create2'           : '$1 created a user account $3',
		'logentry-newusers-autocreate'        : 'Account $1 was created automatically',
		// Rights
		'rightslogentry'             : 'changed group membership for $1 from $2 to $3',
		'rightslogentry-autopromote' : 'was automatically promoted from $2 to $3',
		'rightsnone'                 : '(none)',
		// ## Non-standard Mediawiki logs ##
		// User Avatar - https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/UserProfilePageV3/UserProfilePage.i18n.php
		'blog-avatar-changed-log' : 'Added or changed avatar',
		'blog-avatar-removed-log' : "Removed $1's avatars",
		// User Rename - https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/UserRenameTool/SpecialRenameuser.i18n.php
		'userrenametool-success' : 'The user "$1" has been renamed to "$2".',
		// ## Wiki Features ##
		// Wiki Features - https://github.com/Wikia/app/blob/bf1e586c95224922577b6feea8293df341265a44/extensions/wikia/WikiFeatures/WikiFeatures.i18n.php
		
		// Chat - https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/Chat2/Chat.i18n.php
		'chat-chatbanadd-log-entry' : 'banned $1 from chat with an expiry time of $2, ends $3',
		'chat-chatbanremove-log-entry' : 'unbanned $1 from chat',
		'chat-chatbanchange-log-entry' : 'changed ban settings for $1 with an expiry time of $2, ends $3',
		// Maps - https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/WikiaMaps/WikiaMaps.i18n.php
		'logentry-maps-create_map' : '$1 created new map $3',
		'logentry-maps-update_map' : '$1 updated map $3',
		'logentry-maps-delete_map' : '$1 deleted map $3',
		'logentry-maps-undelete_map' : '$1 restored map $3',
		'logentry-maps-create_pin_type' : '$1 created new pin category for $3',
		'logentry-maps-update_pin_type' : '$1 updated pin category for $3',
		'logentry-maps-delete_pin_type' : '$1 deleted pin category for $3',
		'logentry-maps-create_pin' : '$1 created new pin for $3',
		'logentry-maps-update_pin' : '$1 updated pin for $3',
		'logentry-maps-delete_pin' : '$1 deleted pin for $3',
		// ## Extensions ##
		// Abuse Filter - https://git.wikimedia.org/blob/mediawiki%2Fextensions%2FAbuseFilter/be09eabbdd591fb869b30cd4e77a286763cbe4e1/i18n%2Fen.json
		"abusefilter-log-entry-modify" : "modified $1 ($2)",
		"abusefilter-log-detailslink" : "details",
		
		/***************************
		 * Wall - https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/Wall/Wall.i18n.php#L191
		 ***************************/
		'wall-recentchanges-edit'					: 'edited message',
		'wall-recentchanges-removed-thread'			: 'removed thread "[[$1|$2]]" from [[$3|$4\'s wall]]',
		'wall-recentchanges-removed-reply'			: 'removed reply from "[[$1|$2]]" from [[$3|$4\'s wall]]',
		'wall-recentchanges-restored-thread'		: 'restored thread "[[$1|$2]]" to [[$3|$4\'s wall]]',
		'wall-recentchanges-restored-reply'			: 'restored reply on "[[$1|$2]]" to [[$3|$4\'s wall]]',
		'wall-recentchanges-deleted-thread'			: 'deleted thread "[[$1|$2]]" from [[$3|$4\'s wall]]',
		'wall-recentchanges-deleted-reply'			: 'deleted reply from "[[$1|$2]]" from [[$3|$4\'s wall]]',
		'wall-recentchanges-closed-thread'			: 'closed thread "[[$1|$2]]" on [[$3|$4\'s wall]]',
		'wall-recentchanges-reopened-thread'		: 'reopened thread "[[$1|$2]]" on [[$3|$4\'s wall]]',
		'wall-recentchanges-thread-group'			: '$1 on [[$2|$3\'s wall]]',
		'wall-recentchanges-history-link'			: 'wall history',
		'wall-recentchanges-thread-history-link'	: 'thread history',
		
		/***************************
		 * Forum Boards - https://github.com/Wikia/app/blob/808a769df6cf8524aa6defcab4f971367e3e3fd8/extensions/wikia/Forum/Forum.i18n.php#L113
		 ***************************/
		'forum-recentchanges-edit'					: 'edited message',
		'forum-recentchanges-removed-thread'		: 'removed thread "[[$1|$2]]" from the [[$3|$4 Board]]',
		'forum-recentchanges-removed-reply'			: 'removed reply from "[[$1|$2]]" from the [[$3|$4 Board]]',
		'forum-recentchanges-restored-thread'		: 'restored thread "[[$1|$2]]" to the [[$3|$4 Board]]',
		'forum-recentchanges-restored-reply'		: 'restored reply on "[[$1|$2]]" to the [[$3|$4 Board]]',
		'forum-recentchanges-deleted-thread'		: 'deleted thread "[[$1|$2]]" from the [[$3|$4 Board]]',
		'forum-recentchanges-deleted-reply'			: 'deleted reply from "[[$1|$2]]" from the [[$3|$4 Board]]',
		'forum-recentchanges-thread-group'			: '$1 on the [[$2|$3 Board]]',
		'forum-recentchanges-history-link'			: 'board history',
		'forum-recentchanges-thread-history-link'	: 'thread history',
		'forum-recentchanges-closed-thread'			: 'closed thread "[[$1|$2]]" from [[$3|$4]]',
		'forum-recentchanges-reopened-thread'		: 'reopened thread "[[$1|$2]]" from [[$3|$4]]',
	};
	
	// http://download.remysharp.com/wiki2html.js
	i18n.wiki2html = function(pText) {
		if(pText == undefined) { console.log("ERROR: [RecentChangesMultiple] i18n.wiki2html was passed an undefined string"); return pText; };
		var args = Array.prototype.slice.call(arguments, 1); // Used for formatting string with $1
		
		return pText
			// bold
			.replace(/'''(.*?)'''/g, function (m, l) {
				return '<strong>' + l + '</strong>';
			})
			// italic
			.replace(/''(.*?)''/g, function (m, l) {
				return '<em>' + l + '</em>';
			})
			// normal link
			.replace(/[^\[](http[^\[\s]*)/g, function (m, l) {
				return '<a href="' + l + '">' + l + '</a>';
			})
			// format string by replacing wiki $1 string vars with text.
			.replace(/\$(\d+)/g, function(match, number) { 
				return typeof args[number-1] != 'undefined' ? args[number-1]  : match ;
			})
			// internal link or image
			.replace(/\[\[(.*?)\]\]/g, function (m, l) {
				var p = l.split(/\|/);
				var link = p.shift();

				// if (link.match(/^Image:(.*)/)) {
				// 	// no support for images - since it looks up the source from the wiki db
				// 	return m;
				// } else {
					return '<a href="' + link + '">' + (p.length ? p.join('|') : link) + '</a>';
				// }
			})
			// external link
			.replace(/[\[](http:\/\/.*|\/\/.*)[!\]]/g, function (m, l) {
				var p = l.replace(/[\[\]]/g, '').split(/ /);
				var link = p.shift();
				return '<a href="' + link + '">' + (p.length ? p.join(' ') : link) + '</a>';
			})
			/*******************************************************************************
			 * https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language
			 *******************************************************************************/
			// {{GENDER}} - cannot be checked by script, so just uses {{{1}}}/{{{2}}}
			.replace(/{{GENDER:(.*?)}}/g, function(m, l) { 
				var p = l.split("|");
				var user = p.shift(); // Currently doesn't work, so this will just assume male.
				return mw.language.gender(user, p);
			})
			// {{PLURAL}} - only does default support
			.replace(/{{PLURAL:(.*?)}}/g, function(m, l) { 
				var p = l.split("|");
				var num = p.shift();
				return mw.language.convertPlural(num, p);
			})
			// {{GRAMMAR}}
			.replace(/{{GRAMMAR:(.*?)}}/g, function(m, l) { 
				var p = l.split("|");
				//var num = p.shift();
				return mw.language.convertGrammar(p[1], p[0]);
			})
		;
	};
	
	return i18n;
})(window.jQuery, document, window.mediaWiki, window.dev.RecentChangesMultiple);
//</syntaxhighlight>