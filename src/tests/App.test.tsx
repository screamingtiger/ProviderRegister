import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import * as api from '../lib/api/api';
import Api2 from '../lib/api/api2'

/*
test('renders learn react link', async () => {
  render(<App />);

 jest.spyOn(api,'getGoogle').mockReturnValue(Promise.resolve("Hello"));
 jest.spyOn(api,'getNothing').mockReturnValue(Promise.resolve("Nothing Hereqqq"));

 const r = await api.getGoogle().then((l) => {return l});
 expect(r).toBe("Hello");
 const a = await api.getNothing().then((l) => {return l});
 expect(a).toBe("Nothing Here");

});
*/

test('renders learn react link', async () => {
  render(<App />);

  const api2 = new Api2();
 jest.spyOn(api2,'getCountry').mockReturnValue(Promise.resolve("Hello"));
 
 const r = await api2.getCountry().then((l) => {return l});
 expect(r).toBe("Hello");
 
});