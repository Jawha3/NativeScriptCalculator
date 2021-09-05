import { Frame, NavigatedData, Observable, Page, PropertyChangeData, TextField } from "@nativescript/core";
import { myData } from "~/myData";
import { NumberViewModel } from "~/NumberViewModel";

var mData: myData;

var talll: TextField
var obs: NumberViewModel = new NumberViewModel();

export function navigatingTo(args: NavigatedData) {

    var page: Page = <Page>args.object

    mData = page.navigationContext.data
    page.bindingContext = obs
    talll = <TextField>page.getViewById("talll")   
}

export function fetchNumBtn() {

    console.log(mData);
    
    mData.tal = talll.text

    Frame.goBack();

}