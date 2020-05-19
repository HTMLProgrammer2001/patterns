import ClipboardApi from './Clipboard';


class Editor{
	offset: number = 0;
	len: number = 0;
	clipboard: ClipboardApi = ClipboardApi.getInstance();

	constructor(public text:string){}

	cut(){
		this.text = this.text.slice(0, this.offset) + this.text.slice(this.offset + this.len);
	}

	copy(): string{
		let data = this.text.substr(this.offset, this.len);
		this.clipboard.setData(data);

		return data;
	}

	paste(){
		this.text = this.text.slice(0, this.offset) + this.clipboard.getData() + this.text.slice(this.offset);
		this.clipboard.setData('');
	}

	getText(): string{
		return this.text;
	}

	setText(newText: string){
		this.text = newText;
	}

	setRange(offset: number, end: number){
		this.offset = offset;
		this.len = end - offset;
	}
}

export default Editor;
