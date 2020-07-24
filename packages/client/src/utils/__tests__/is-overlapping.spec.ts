/* eslint-disable */
import { ActivityFragment } from '../../generated/graphql';
import { isOverlapping } from '../is-overlapping';

test('pattern 1', () => {
  const event1 = {
    startAt: '2019-03-12T00:00:00.000+09:00',
    endAt: '2019-03-12T02:00:00.000+09:00',
  } as ActivityFragment;
  const event2 = {
    startAt: '2019-03-12T01:00:00.000+09:00',
    endAt: '2019-03-12T03:00:00.000+09:00',
  } as ActivityFragment;

  expect(isOverlapping(event1, event2)).toBe(true);
});

test('pattern 2', () => {
  const event1 = {
    startAt: '2019-03-12T01:00:00.000+09:00',
    endAt: '2019-03-12T03:00:00.000+09:00',
  } as ActivityFragment;
  const event2 = {
    startAt: '2019-03-12T00:00:00.000+09:00',
    endAt: '2019-03-12T02:00:00.000+09:00',
  } as ActivityFragment;

  expect(isOverlapping(event1, event2)).toBe(true);
});

test("return false if both aren't overlapping", () => {
  const event1 = {
    startAt: '2019-03-12T01:00:00.000+09:00',
    endAt: '2019-03-12T02:00:00.000+09:00',
  } as ActivityFragment;
  const event2 = {
    startAt: '2019-03-12T03:00:00.000+09:00',
    endAt: '2019-03-12T04:00:00.000+09:00',
  } as ActivityFragment;

  expect(isOverlapping(event1, event2)).toBe(false);
});
