import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addUser, addUserSuccess } from '../Action/landing.action';
import { catchError, concat, delay, exhaustMap, map, of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AntSpinnerService } from 'src/app/common/ant-spinner.service';
import { message } from 'src/app/common/Store/Action/shared.actions';
import { Message } from 'src/app/common/Store/Reducer/shared.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';



@Injectable()
export class LandingEffects {


  constructor(private actions$: Actions, public authservice:AuthService,private loaderService: AntSpinnerService,private store:Store<AppState>) {}

  signUp$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(addUser),
      exhaustMap((action)=>{
        return this.authservice.signUp(action.user).pipe(map((data)=>{
          this.loaderService.hide();
          const msg:Message = {
            messagetxt: 'data added successfully',
            messagetype: 'success'
          }
          this.loaderService.msgdisplay(msg);
          console.log(data)
          return addUserSuccess({data})
        })
        ,catchError((err)=>{
          this.loaderService.hide();
          const errorMessage = this.authservice.getErrorMessage(
            err.error
          );
          const msg:Message = {
            messagetxt: errorMessage,
            messagetype: 'error'
          }
          return concat(
            of(message({ msg: msg })),
            of(message({ msg: { messagetxt: '', messagetype: 'error' } })).pipe(delay(3000))
          )
        })
        )
      })
      )
  })

}
