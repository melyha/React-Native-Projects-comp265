 # mySaskPoly Mobile App - Development Plan

## Project Overview
Build a React Native mobile application for Saskatchewan Polytechnic students based on the Figma prototype. This document outlines the pre-development planning phase.

---

## Design Foundation

### Figma Prototype
- **Design**: Material Design 3 for Android
- **Color Scheme**: Saskatchewan Polytechnic purple with Material Design 3 palette
- **Typography**: Roboto font family following M3 type scale

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
1. **react-native-paper** (Primary third-party choice)
   - Switch component (enhanced Material Design styling)
   - Button component (Material Design buttons)

2. **@expo/vector-icons** (Supporting)
   - Ionicons for menu, search, navigation icons
   - Material icons for status indicators

3. **react-native-safe-area-context** (Supporting)
   - SafeAreaView for proper iOS/Android layout
   - Handles notches and system UI

4. **expo-linear-gradient** (Optional enhancement)
   - Header gradient background
   - Potential for card backgrounds

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


### Must Have (MVP)
 All 8 React Native components implemented  
 At least 1 third-party module actively used  
 Home screen matches Figma design  
 Clean component structure  
 Design tokens organized  
 Git history with clear commits 


 ---