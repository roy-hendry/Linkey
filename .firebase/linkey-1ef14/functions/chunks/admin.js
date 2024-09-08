import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "linkey-1ef14";
const FB_CLIENT_EMAIL = "firebase-adminsdk-5uyr3@linkey-1ef14.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDosCvIG9PFOyhb\ngU5U+dMDGC6uITJYf4rgD04GVZmTzuMmcXASE4iidUMUSDdrunObLkEOSBfrO/HY\nyJ3KO9y2MninfkR6d/JnHYDYLKX9zd9qp20Cp6AldzPv/1wJ5b7pf+29WZA2jQ3b\njlZ9YIW0cU0DJ4jwBAta0dGjidTrlQlZdj4C1rJdoU5PYGzneBBrG8rpMi8xHUdf\nfWS0yf7caSGSRMy/No060dBO/z5KfJO+fxPG7DSSAJoQMiHIrTEuKt6SmKqyTMcu\nUnbvm3PsHepu9sZ7or5CD0kmnGYQBDhSdRE+Vxo3XdFOIqM0fi5Ir0nqy9TTTK9F\nKv5JWtJpAgMBAAECggEAHvBdwevBSrZE9XXJ/o6BOiYa/tg3I4FB6+zdCQaUtwyJ\nM3Fd32ltf3xsAORhSheui3GpAMchNwvvak2yfVNcU3V+iXbGkComtwM7QIMfRxH6\npOnCGtpC9vhUlZK0oDRGIDH8YHLqM/apYwoYAe+1l3qBLOwyzwcao2bGoyIOh4w2\nmEHKQlX+FiqGj+9N3qGFkbBru4aEOQwt0y8v3MeFjMffMUcILe3o3/I7PRB/xDZR\nabemFR+HKpWP+mlgbwmBkoUDjuyHSEhmPYipjXr+WCOJYe0dEV5f5sQpQUQIjh/B\nkS1r1fHZldh7v6o6od1Qy/6DN74g02YVW2WUj73QqQKBgQD5oisvx824Di965hDQ\nEFKoIiENscb8/O2HLP4HODRQj5ndLT49Ndu+cv3lIYlT9GtFt0kzbip76DE4hTxp\nLW5ng8CqIJyGTPcJXjlWh8Cx43k/YOKV3zZkOG7XM8IWoddqnP/hTuoWNdBkdcPh\nqWdkvNs+nxzDzyZg38GT//gDEwKBgQDun15A7vBJr2APY0NWoP2usq6Mr4I8Yabh\n4hbsyyja4xDW9QexaRhUv6DTKsP6TASQ1S2J8+JSisP3QQFFbrXANIh2QPrX7i/j\nH/rV1xBKMmwZpk0YY65qOIMgD0C6L3ki/sGZXLimAV/IniTBTjgkKxPRS8MG3YUs\nzY8FL/4IEwKBgEFNYu7E3dPgIhuMQ6mqG3VQOEVU1DEqGRjbdDh/Q3AvoJhzVWy9\nwhY4DqL5+uqzbbx3DfceQo7XVsjqUbtR3yfFF4lproiTaaxRsb4pFQdz8ivaNGvw\nUFI3UQeKyqMRA0EogOd3tVTKDxG4nN1Ta3C21sOy69ttPSTqY8FLnJ1xAoGBAMWr\n+5Zq2V8RCtB0eEoBH2Vi27nrgkWm12nzsu4B9hwtUbvgS7kpyGAcRovnt2VXJ8ka\n75iCEhAyp9fhX7420hUg75KWjbXmuIC78zzF5daxIl+1JdR4bvnLSsR6HjKeNQlK\nZPI4nzXVmZVFfEkuFM/RZ59P1YWQaEwPFNVFRnlFAoGAaYi64PRTqS1kj29xEDOQ\nKMRhgvK/V27/uEf3P8t/bco6zc+XeMiwqYpK33F0aAUQl+L6aqxbbogYo1cZZRl2\nmSa2q82xB9yINEvg9/iRR+xjKyazfXDmtGMztS99Yq34tsZO/9/d7YvRVKRrAbqO\n8f9GQ27nb4CjY/awJcA0reY=\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (e) {
  if (!/already exists/u.test(e.message)) {
    console.error("Firebase Admin Error:", e.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
