
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

labelWidth = 75
controlWidth = 160
controlHeight = 25

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
.SelectedIndex = 1

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
.Items.Add "Yellow"
.Items.Add "Green"
.Items.Add "Red"
.Items.Add "Blue"
.Items.Add "Black"
.SelectedIndex = 1
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
.SelectedIndex = 3
End with
'==================================================================================================== Button
Set Button = DotNetFactory.CreateInstance("System.Windows.Forms.Button", "System.Windows.Forms")
Set dResult = DotNetFactory.CreateInstance("System.Windows.Forms.DialogResult", "System.Windows.Forms")
With Button
.Text = "Create"
.Location =  GetPoint(755,110)
.DialogResult = dResult.OK
End With
'================================================================================================ Forms
'Create the .NET form object
Set oForm = DotNetFactory("System.Windows.Forms.Form","System.Windows.Forms")

With oForm

.Text = "Enter environment details"

.TopMost = True

.StartPosition = .StartPosition.CenterScreen

.FormBorderStyle = .FormBorderStyle.FixedToolWindow

.Size = GetSize(900,215)

.Controls.Add Objects
.Controls.Add oLstEnvironment
.Controls.Add LabelColor
.Controls.Add ComboBoxT
.Controls.add LabelPosition
.Controls.Add ComboBoxF
.Controls.add Button
.Controls.Add dResult
.Controls.Add Color

.ShowDialog()
End with

'---------------------------------------------------------------------------------------

While oForm.DialogResult <> dResult.Cancel
	
Select Case oForm.DialogResult
	Case dResult.OK
	dim obj,x,y,i
	
	obj = oLstEnvironment.Text
   Set Color = DotNetFactory.CreateInstance("System.Drawing.Color", "System.Drawing")
	
	'-------------------------------------------------------------------------
		Select Case ComboBoxF.Text
	Case "Dreapta sus"
	x = 732
	y = 21
	Case "Dreapta jos"
	x = 732
	y = 140
	Case "Centru"
	x = 406
	y = 110
	Case "Stînga jos"
	x = 40
	y = 113
	Case "Stînga sus"
	x = 40
	y = 12
    End Select
 '-------------------------------------------------------------------------------
	
Set NewObj = DotNetFactory("System.Windows.Forms."&obj ,"System.Windows.Forms")
xz = CInt(ComboBoxT.SelectedIndex)
xy = Array(Color.Yellow,Color.Green,Color.Red,Color.Blue,Color.Black)
NewObj.BackColor = xy(xz)

With NewObj
 .Name = "NewObj"
.Size = GetSize(labelWidth, controlHeight)
.Location = GetPoint(x,y)
 
'--------------------------------------------------------------------------------

End with
	oForm.Controls.Add NewObj
	oForm.ShowDialog()
	oForm.Controls.Remove NewObj
Case dResult.Cancel
	msgbox "Completati Rindurile"
End Select
	
Wend


'Destroy all of the object reference
Set Objects = Nothing
Set LabelColor = Nothing
Set ComboBoxT = Nothing
Set LabelPosition = Nothing
Set ComboBoxf = Nothing
Set oForm = Nothing
