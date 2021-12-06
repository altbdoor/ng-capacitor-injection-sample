import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CapacitorPluginsModule, STORAGE_PLUGIN } from './capacitor-plugins/capacitor-plugins.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacitorPluginsModule],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: STORAGE_PLUGIN,
          useValue: jasmine.createSpyObj('Storage', ['lmaoThisIsAFake'])
        }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-capacitor-injection-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-capacitor-injection-sample');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('ng-capacitor-injection-sample app is running!');
  // });
});
