
export default function trim(text, maxLength) {
 
    if (maxLength < 1) {
        throw new RangeError();
    }
    
    if (text.length <= maxLength) {
        return text;
    }
  
    text = text.slice(0, maxLength - 1);
    text = `${text}\u2026`;
    return text;
}
