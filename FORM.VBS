

'Function to get a Size object
Public Function GetSize(x,y)
'Create a Size object with constructor int, int
Set GetSize = DotNetFactory("System.Drawing.Size","System.Drawing", x, y)
End Function

'——————————————————————————————

'Function to get a Point object
Public Function GetPoint(x,y)
'Create a POINT object with constructor int, int
Set GetPoint = DotNetFactory("System.Drawing.Point","System.Drawing", x, y)
End Function

'Function to get a Size object
Public Function GetSize(x,y)
'Create a Size object with constructor int, int
Set GetSize = DotNetFactory("System.Drawing.Size","System.Drawing", x, y)
End Function

'X, Y coordinate for a Label

labelWidth = 75

'Width and height of each control
controlWidth = 160
controlHeight = 25

'X coordinate of a control in front of the variable
cDelta = lStartX + labelWidth + 10

'Difference in height between two controls
deltaHeight = 30


'========================================================================================= Label
'Create a Label object for the requested user name
Set Objects = Dotnetfactory("System.Windows.Forms.Label","System.Windows.Forms")
With Objects
.Size = GetSize(labelWidth, controlHeight)
.Location = GetPoint(30,57)
.Text = "Objects"
.tabIndex = 0
End with


'============================================================================================== ComboBox
'Create a combo box object for the the requested Environment
Set oLstEnvironment = DotNetFactory("System.Windows.Forms.ComboBox","System.Windows.Forms")

With oLstEnvironment
'Name the list box
.Name = "lstEnvironment"
.Size = GetSize(controlWidth, controlHeight)
.Location = GetPoint(110,54)
.TabIndex = 1

.Items.Clear


'Add items to the combo box list                     
.Items.Add "Button"
.Items.Add "CheckBox"
.Items.Add "RadioButton"
.Items.Add "ComboBox"


End with
'================================================================================================ Label 2
'Create a Label object for the requested user name
Set LabelColor = Dotnetfactory("System.Windows.Forms.Label","System.Windows.Forms")

With LabelColor
.Size = GetSize(labelWidth, controlHeight)
.Location = GetPoint(315,57)
.Text = "Colors"
.tabIndex = 2
End with


'================================================================================================= ComboBox 2
'Create a combo box object for the the requested Environment
Set ComboBoxT = DotNetFactory("System.Windows.Forms.ComboBox","System.Windows.Forms")

With ComboBoxT
'Name the list box
.Name = "ComboBoxt"
.Size = GetSize(controlWidth, controlHeight)
.Location = GetPoint(393,54)
.TabIndex = 3

'Clear all items in the combo box list
.Items.Clear

'Add items to the combo box list
.Items.Add "White"
.Items.Add "Green"
.Items.Add "Red"
.Items.Add "Blue"

End with
'=================================================================================================== Label 3
'Create a Label object for the requested user name
Set LabelPosition = Dotnetfactory("System.Windows.Forms.Label","System.Windows.Forms")

With LabelPosition
.Size = GetSize(labelWidth, controlHeight)
.Location = GetPoint(600,57)
.Text = "Position"
.tabIndex = 4
End with


'===================================================================================================== ComboBox 3
Set ComboBoxF = DotNetFactory("System.Windows.Forms.ComboBox","System.Windows.Forms")
With ComboBoxF
.Name = "ComboBoxt"
.Size = GetSize(controlWidth, controlHeight)
.Location = GetPoint(676,54)
.TabIndex = 3
.Items.Clear
.Items.Add "Dreapta sus"
.Items.Add "Dreapta jos"
.Items.Add "Centru"
.Items.Add "Stînga jos"
.Items.Add "Stînga sus"

End with
'==================================================================================================== Button
Set Button = DotNetFactory.CreateInstance("System.Windows.Forms.Button", "System.Windows.Forms")
Set dResult = DotNetFactory.CreateInstance("System.Windows.Forms.DialogResult", "System.Windows.Forms")
With Button
.Text = "Create"
.Location =  GetPoint(755,110)
.DialogResult = dResult.Ok
End With
'================================================================================================ Forms
'Create the .NET form object
Set oForm = DotNetFactory("System.Windows.Forms.Form","System.Windows.Forms")

With oForm
'Title for the form
.Text = "Enter environment details"

'Make it the top most window
.TopMost = True

'Set the startup position a CenterScreen
.StartPosition = .StartPosition.CenterScreen

'Set the form style as a fixed tool window
.FormBorderStyle = .FormBorderStyle.FixedToolWindow

'Set the size of the window
.Size = GetSize(900,215)

'Add the controls we just created to the form
.Controls.Add Objects
.Controls.Add oTxtUserName
.Controls.Add oLstEnvironment
.Controls.Add LabelColor
.Controls.Add ComboBoxT
.Controls.add LabelPosition
.Controls.add Button
.Controls.Add dResult
.Controls.Add ComboBoxF
.Controls.Add NewObj

'Show the form as a modal dialog. Code execution will advance to
'next line after the user closes the form
.ShowDialog()

End with
oForm.dispose
dim obj,x,y



'While oForm.DialogResult <> dResult.Cancel
''Select Case  oForm.DialogResult
''	dResult.Ok
''End Select
''------------------------------------------------------------------------------------
'obj = oLstEnvironment.Text
'Set Color = DotNetFactory.CreateInstance("System.Drawing.Color", "System.Drawing")
''------------------------------------------------------------------------------------
'	Select Case ComboBoxT.SelectedIndex
'	Case 1
'	ComboBoxT.BackColor = Color.Blue
'	Case 2
'	ComboBoxT.BackColor = Color.Blue
'	Case 3
'	ComboBoxT.BackColor = Color.Blue
'	Case 4
'	ComboBoxT.BackColor = Color.Blue
'End Select
'
'Select Case ComboBoxF.Text
'	Case "Dreapta sus"
'	x = 732
'	y = 21
'	Case "Dreapta jos"
'	x = 732
'	y = 140
'	Case "Centru"
'	x = 406
'	y = 110
'	Case "Stînga jos"
'	x = 40
'	y = 113
'	Case "Stînga sus"
'	x = 40
'	y = 12
'End Select
''--------------------------------------------------------------------------------
'
'If oForm.DialogResult = dResult.OK Then
'Set NewObj = DotNetFactory("System.Windows.Forms."&obj ,"System.Windows.Forms")
'With NewObj
' .Name = "NewObj"
'.Size = GetSize(controlWidth, controlHeight)
'.Location = GetPoint(x,y)
'
'End With
'End If
''-------------------------------------------------------------------------------
'Wend





'Destroy all of the object reference
Set Objects = Nothing
Set LabelColor = Nothing
Set ComboBoxT = Nothing
Set LabelPosition = Nothing
Set ComboBoxf = Nothing
Set oForm = Nothing
