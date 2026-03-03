 # mySaskPoly Mobile App - Development Plan

## Project Overview
Build a React Native mobile application for Saskatchewan Polytechnic students based on the Figma prototype. This document outlines the pre-development planning phase.
The app is built with Expo and TypeScript. The app provides students with access to their courses, grades, schedule, and assignments through an intuitive Material Design 3 interface, with persistent storage for personalized data.

---

## Design Foundation

### Figma Prototype
- **Design**: Material Design 3 for Android
- **Color Scheme**: Saskatchewan Polytechnic purple with Material Design 3 palette
- **Typography**: Roboto font family following M3 type scale
- - **Screens**: Home, Courses, Grades, Schedule, Drawer Navigation

### Design System Components Identified
From the Figma prototype, the following design elements need to be extracted:
- Color tokens (primary, secondary, surface, error, text colors)
- Typography scale (display, headline, title, body, label)
- Spacing system 
- Border radius values (cards, buttons, search bar)
- Elevation/shadow system 

---

## Technical Requirements

### Required React Native Components (Assignment Criteria)
Must use ALL of the following:
1. **View** - Container components throughout
2. **Text** - All text content
3. **Image** - News section images
4. **TextInput** - Search bar in header
5. **ScrollView** - Main content scrolling wrapper
6. **StyleSheet** - All component styling
7. **Button** - "View All" and "View Details" CTAs
8. **Switch** - Notifications toggle in header

### Third-Party Modules (Minimum 1 Required)
Selected modules and their purpose:
**Storage & Data Persistence:**
- `@react-native-async-storage/async-storage` - Persistent local storage
- Custom `PersistentStorage` utility class with sync/async methods

**UI Components:**
- `react-native-paper` (Material Design 3 components)
  - Switch component with Material theming
  - Button components (contained, outlined modes)
- `@expo/vector-icons` - Ionicons for navigation and UI elements

**Navigation:**
- `expo-router` - File-based routing with tab and stack navigation
- `react-native-safe-area-context` - SafeAreaView for device compatibility

**Gestures:**
- `react-native-gesture-handler` - Swipe-to-delete functionality
- Custom swipeable deadline cards with animated delete action


---

## Navigation Architecture

### Tab Navigation (Bottom Navigation Bar)
```
Tab 1: Home - Today's classes, deadlines, campus news
Tab 2: Courses - Course list with search and details
Tab 3: Grades - Grade overview and detailed breakdowns
Tab 4: Schedule - Weekly class schedule
Tab 5: Debug - Storage debugger (development only)
```

### Stack Navigation (Deep Linking)

**Courses Stack:**
```
Courses List
  └─→ Course Details (pass courseId, courseName, instructor)
       └─→ Professor Details (pass professorName, courseCode)
```

**Home Stack:**
```
Home Dashboard
  └─→ Profile (from drawer navigation)
  └─→ Settings (from drawer navigation)
```

**Grades Stack:**
```
Grades Overview
  └─→ Grade Details (pass courseId, gradeData)
```

### Parameter Passing Implementation
**Example: Courses → Course Details**

---

## Persistent Storage Strategy

### Storage Architecture
**File**: `components/utilities/db.tsx`

**PersistentStorage Class Features:**
- In-memory cache for fast synchronous access
- Background disk writes with AsyncStorage
- Automatic initialization on app start
- Support for sync and async operations

**Methods:**
```typescript
Storage.saveDataSync(key, data)    // Immediate UI update, background save
Storage.loadDataSync(key)          // Synchronous read from cache
Storage.saveDataAsync(key, data)   // Await disk write
Storage.loadDataAsync(key)         // Await disk read
Storage.clearAllSync()             // Wipe all storage
```


---

## Component Architecture

### File Structure
components/
school-app/            # App-specific components
-Header.tsx            # Search + notifications switch
-ScheduleCard.tsx      # Class schedule item
-DeadlineCard.tsx      # Assignment deadline item
-NewsCard.tsx          # News/announcement card


### Component Breakdown

#### 1. Header Component
**Purpose**: Welcome message, search bar, notifications toggle  
**Required Components Used**: View, Text, TextInput, Switch  
**Third-Party**: react-native-paper (Switch)  
**Props**:
- `userName`: string (default: "Cassandra Wellington")
- `searchQuery`: string (state)
- `onSearchChange`: (text: string) => void
- `notificationsEnabled`: boolean (state)
- `onNotificationsToggle`: (value: boolean) => void

**Styling Considerations**:
- Purple background (#6B46C1)
- Material Design elevation for search input

#### 2. ScheduleCard Component
**Purpose**: Display individual class schedule  
**Required Components Used**: View, Text  
**Props**:
- `time`: string (e.g., "9:00 AM")
- `courseCode`: string (e.g., "MULT213")
- `courseName`: string (e.g., "Web Development 5")
- `room`: string (e.g., "Room B8 10")

**Styling Considerations**:
- White card background
- Time displayed in left column
- Course details in main area

#### 3. DeadlineCard Component
**Purpose**: Display assignment deadlines with urgency indicator  
**Required Components Used**: View, Text, TouchableOpacity (Button alternative)  
**Props**:
- `courseCode`: string
- `title`: string
- `dueDate`: string
- `isUrgent`: boolean (shows "Urgent" badge)
- `onPress`: () => void (optional)

**Styling Considerations**:
- White card background
- Chevron icon on right 

#### 4. NewsCard Component
**Purpose**: Display news/announcements with optional images  
**Required Components Used**: View, Text, Image, Button  
**Third-Party**: react-native-paper (Button) or TouchableOpacity fallback  
**Props**:
- `title`: string
- `date`: string
- `description`: string
- `buttonText`: string
- `imageUrl`: string (optional)
- `backgroundColor`: string (optional, default white)
- `onPress`: () => void (optional)

**Styling Considerations**:
- Variable background (white or purple container)
- Optional image at top (150px height)
- Button style changes based on background


#### 5. HomeScreen (Main)
**Purpose**: Primary dashboard view  
**Required Components Used**: SafeAreaView, ScrollView, View, StatusBar  
**Child Components**: Header, ScheduleCard, DeadlineCard, NewsCard  
**State Management**:
- `searchQuery`: string (for TextInput)
- `notificationsEnabled`: boolean (for Switch)


---

## Design Token Extraction Strategy

### Using AI with Figma MCP
1. Connect to Figma design file via MCP integration
2. Extract design tokens programmatically
3. Generate TypeScript files with proper types

### Token Categories
**colors.ts**
**typography.ts**
**spacing.ts**
**index.ts**

---


## Developer Tools

### Storage Debugger
**File**: `app/(tabs)/storage-debug.tsx`

**Purpose**: Development tool to view and manage AsyncStorage data

---

## Known Issues & Limitations

### Current Limitations
- Static course data (not API-connected)
- Debug tab visible (remove before production)
- No authentication system
- No real-time data synchronization

### Technical Debt
- Add error boundaries for crash handling
- Implement loading states for async operations
- Add input validation for user data
- Optimize re-renders with React.memo
- Add unit tests for storage operations

---


### Must Have (MVP)
 All 8 React Native components implemented  
 At least 1 third-party module actively used  
 Home screen matches Figma design  
 Clean component structure  
 Design tokens organized  
 Git history with clear commits 
 Navigation (Expo Router - ALL required)
 Tabs - Minimum 2 tabs
 Stack - Minimum 6 unique screens
 Modals - Minimum 1 modal screen
 URL Parameters - Minimum 3 screens that support parameters


Current Status Check:
Completed:
Git version control (10+ commits)
All 8 components implemented
5 third-party modules (exceeds requirement)
Tabs: 4 tabs (exceeds 2 minimum)
URL parameters: 4 screens (exceeds 3 minimum)
Modern JavaScript throughout
Material Design 3 styling

 ---

 ## Resources & Documentation

**Figma Design**: https://www.figma.com/

**Documentation:**
- Expo Router: https://docs.expo.dev/router/introduction/
- React Native Paper: https://callstack.github.io/react-native-paper/
- AsyncStorage: https://react-native-async-storage.github.io/async-storage/
- Gesture Handler: https://docs.swmansion.com/react-native-gesture-handler/

**Material Design 3**: https://m3.material.io/