const TEL_REGEXP = /^[1][3-8]\d{9}$|^([6|8|9])\d{7}$|^[6]([8|6])\d{5}$/;
const ID_CARD_REGEXP = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$|^[A-Z][0-9]{6}\([0-9A]\)$/;
const EMAIL_REGEXP = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
const URL_REGEXP = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;

export {
	TEL_REGEXP,
	ID_CARD_REGEXP,	
	EMAIL_REGEXP,
	URL_REGEXP
}