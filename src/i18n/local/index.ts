import enCommon from './en/common';
import esCommon from './es/common';

const messages: Record<string, { common: Record<string, string> }> = {
  en: { common: enCommon },
  es: { common: esCommon },
};

export default messages;