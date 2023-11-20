import assert from 'assert';
import courses from './courses.json';
import modules from './modules.json';
import assignments from './assignments.json';
import users from './users.json';
import enrollments from './enrollments.json';
import grades from './grades.json';

// Asserting that the imported files are of type 'json'
assert.strictEqual(typeof courses, 'object', 'courses.json is not a valid JSON file');
assert.strictEqual(typeof modules, 'object', 'modules.json is not a valid JSON file');
assert.strictEqual(typeof assignments, 'object', 'assignments.json is not a valid JSON file');
assert.strictEqual(typeof users, 'object', 'users.json is not a valid JSON file');
assert.strictEqual(typeof enrollments, 'object', 'enrollments.json is not a valid JSON file');
assert.strictEqual(typeof grades, 'object', 'grades.json is not a valid JSON file');

export default {
  courses,
  modules,
  assignments,
  users,
  enrollments,
  grades,
};
