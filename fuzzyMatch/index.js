
// 模糊匹配中文全拼或首字母
export default fuzzyMatch = (input = "", text = "") => {
  const inputLower = input.toLowerCase();
  if (/^[a-zA-Z]/.test(input)) {
    const shortLetter = window.PinyinHelper.getShortPinyin(text);
    if (shortLetter.toLowerCase().indexOf(inputLower) >= 0) {
      return true;
    }
    const fullLetter = window.PinyinHelper.convertToPinyinString(
      text,
      "",
      window.PinyinFormat.WITHOUT_TONE
    );
    return fullLetter.toLowerCase().indexOf(inputLower) >= 0;
  }
  return text.toLowerCase().indexOf(inputLower) >= 0;
};
