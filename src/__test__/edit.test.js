import { jest } from '@jest/globals';
import { editTask } from '../__mocks__/updateStatus';

jest.mock('../updateStatus');

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
global.window = window;
global.document = window.document;
describe('testing the edit', () => {
  test('edit the todoList', () => {
    const list = global.document.getElementsByClassName('drag-div');
    Array.from(list).forEach((li) => {
      expect(li).not.toBe(null);
    });
  });

  test('edit the test', () => {
    const list = global.document.getElementsByClassName('drag-div');
    Array.from(list).forEach((li, index) => {
      li.description = 'testing';
      editTask(index, li);
      expect(li.description).not.ToBe('elisha');
    });
  });
});
