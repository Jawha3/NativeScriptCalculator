
import { EventData, Frame, Label, NavigatedData, Observable, Page, PropertyChangeData } from '@nativescript/core'
import { myData } from './myData'
import { NumberViewModel } from './NumberViewModel'

var obs: NumberViewModel = new NumberViewModel();
var mData: myData;
var tal1: Label

export function navigatingTo(args: NavigatedData) {

  const page = <Page>args.object

  page.bindingContext = obs

  if (!args.isBackNavigation) {
    const page = <Page>args.object
    mData = new myData();

    obs.on(Observable.propertyChangeEvent, (event: PropertyChangeData) => {

      if (event.propertyName == "hvilketTal" && event.value == 1) {
        mData.talNr = 1
        var navigationOptionsFirst = {
          moduleName: "Numbers/fetchNumber",
          context:
          {
            data: mData
          }
        }
        Frame.topmost().navigate(navigationOptionsFirst)
      }      

      if (event.propertyName == "hvilketTal" && event.value == 2) {
        mData.talNr = 2
        var navigationOptionsFirst = {
          moduleName: "Numbers/fetchNumber",
          context:
          {
            data: mData
          }
        }
        Frame.topmost().navigate(navigationOptionsFirst)
      }      
    })
  }

  else {

    if (mData.talNr == 1) {
      obs.tal1 = mData.tal
    }

    else if (mData.talNr == 2) {
      obs.tal2 = mData.tal
    }

  }
}

