import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectedForm } from '@shared/form/forms/selected.form';

export enum ProfileOptions {
  main = 'main',
  photos = 'photos',
  squads = 'squads',
  stories = 'stories',
  friends = 'friends'

}

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  providers: [SelectedForm]
})
export class ProfileMenuComponent implements OnInit {
  @Output() changeTab = new EventEmitter<number>();
  public options!: string[];
  public form!: FormGroup;
  constructor(
    public selectedForm: SelectedForm
  ) { }

  ngOnInit(): void {
    this.options = [...Object.keys(ProfileOptions)]
    this.form = this.selectedForm.init();
  }

  public select(index:number) {
    this.form.get('selected')!.setValue(index);
    this.changeTab.emit(index)
  }

}


