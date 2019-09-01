"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rex_tils_1 = require("@martin_hotell/rex-tils");
const types_1 = require("./types");
exports.SignUpActions = {
    subscribeNewsletter: (email) => rex_tils_1.createAction(types_1.SignUpActionTypes.SUBSCRIBE_NEWSLETTER, { email }),
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL21hdHRoaWV1L3Byb2plY3RzL2xlYXJuaW5nL05ld3NsZXR0ZXJBcHAvc3JjL2NvbXBsZXgtdmVyc2lvbi9tb2R1bGVzL3NpZ251cC9hY3Rpb25zLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQXFFO0FBRXJFLG1DQUE0QztBQUUvQixRQUFBLGFBQWEsR0FBRztJQUMzQixtQkFBbUIsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3JDLHVCQUFZLENBQUMseUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztDQUNsRSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGlldS9wcm9qZWN0cy9sZWFybmluZy9OZXdzbGV0dGVyQXBwL3NyYy9jb21wbGV4LXZlcnNpb24vbW9kdWxlcy9zaWdudXAvYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zVW5pb24sIGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0BtYXJ0aW5faG90ZWxsL3JleC10aWxzJztcblxuaW1wb3J0IHsgU2lnblVwQWN0aW9uVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFNpZ25VcEFjdGlvbnMgPSB7XG4gIHN1YnNjcmliZU5ld3NsZXR0ZXI6IChlbWFpbDogc3RyaW5nKSA9PlxuICAgIGNyZWF0ZUFjdGlvbihTaWduVXBBY3Rpb25UeXBlcy5TVUJTQ1JJQkVfTkVXU0xFVFRFUiwgeyBlbWFpbCB9KSxcbn07XG5cbmV4cG9ydCB0eXBlIFRTaWduVXBBY3Rpb25PYmplY3RUeXBlcyA9IEFjdGlvbnNVbmlvbjx0eXBlb2YgU2lnblVwQWN0aW9ucz47XG4iXSwidmVyc2lvbiI6M30=